/* eslint-disable @typescript-eslint/no-unused-vars */
import 'express-async-errors';
import express, { NextFunction, Request, Response } from 'express';
import path from 'node:path';
import http from 'node:http';
import cors from 'cors';
import { Server } from 'socket.io';
import { ZodError } from 'zod';

import { AppError } from './utils/AppError';
import { env } from './env';
import { routes } from './routes';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

app.use(cors());
app.use(express.json());
app.use('/image', express.static(path.resolve(__dirname, '..', 'tmp')));

app.use(routes);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
	if (err instanceof AppError) {
		return response.status(err.statusCode).json({error: err.message});
	} else if (err instanceof ZodError)  {
		return response.json({ error: err.format() });
	}

	return response.status(500).json({status: 'error', message: 'Internal server error'});
});

server.listen(env.PORT, () => console.log(`Server is running on port ${env.PORT}.`));