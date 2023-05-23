import { Request, Response } from 'express';
import { makeListOrderUseCase } from '../../factories/makeListOrderUseCase';


export class ListOrderController {
	async handle(request: Request, response: Response) {

		const listOrder = makeListOrderUseCase();

		const orders = await listOrder.execure();

		return response.status(200).json({ orders });
	}
}