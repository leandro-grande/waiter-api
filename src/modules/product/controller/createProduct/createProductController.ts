import { Request, Response } from 'express';
import { z } from 'zod';
import { makeCreateProductUseCase } from '../../factories/makeCreateProductUseCase';
import { AppError } from '@/utils/AppError';


export class CreateProductController {
	async handle(request: Request, response: Response) {
		const createProductBodySchema = z.object({
			name: z.string(),
			description: z.string(),
			price: z.coerce.number(),
			category_id: z.string(),
			ingredients: z.string().transform(value => {
				return JSON.parse(value);
			}).optional()
		});

		if (!request.file) {
			throw new AppError('Image is missing');
		}

		const { filename: image } = request.file;

		const data = createProductBodySchema.parse(request.body);

		const createProduct = makeCreateProductUseCase();

		const product = await createProduct.execute({
			...data,
			imagePath: image
		});

		return response.status(201).json(product);
	}
}