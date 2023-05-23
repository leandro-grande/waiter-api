import { Request, Response } from 'express';
import { z } from 'zod';
import { makeDeleteOrderUseCase } from '../../factories/makeDeleteOrderUseCase';


export class DeleteOrderController {
	async handle(request: Request, response: Response) {
		const deleteOrderParams = z.object({
			order_id: z.string()
		});

		const { order_id } = deleteOrderParams.parse(request.params);

		const deleteOrder = makeDeleteOrderUseCase();

		await deleteOrder.execute(order_id);

		return response.sendStatus(204);
	}
}