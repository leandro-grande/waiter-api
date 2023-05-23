import { Request, Response } from 'express';
import { z } from 'zod';
import { makeCreateOrderUseCase } from '../../factories/makeCreateOrderUseCase';


export class CreateOrderController {
	async handle(request: Request, response: Response) {
		const createOrderBodySchema = z.object({
			table: z.string(),
			orderItems: z.array(
				z.object({
					product_id: z.string(),
					qtd: z.number()
				})
			)
		});

		const { table, orderItems } = createOrderBodySchema.parse(request.body);

		const createOrder = makeCreateOrderUseCase();

		const order = await createOrder.execute({
			table,
			orderItems
		});

		return response.status(201).json({ order });
	}
}