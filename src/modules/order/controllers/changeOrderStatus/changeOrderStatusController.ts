import { Request, Response } from 'express';
import { z } from 'zod';
import { makeChangeOrderStatusUseCase } from '../../factories/makeChangeOrderStatusUseCase';


export class ChangeOrderStatusController {
	async handle(request: Request, response: Response) {
		const changeOrderStatusParams = z.object({
			order_id: z.string()
		});

		const changeOrderStatusBody = z.object({
			status: z.enum(['WAITING', 'IN_PRODUCTION', 'DONE'])
		});

		const { order_id } = changeOrderStatusParams.parse(request.params);
		const { status } = changeOrderStatusBody.parse(request.body);

		const changeOrderStatus = makeChangeOrderStatusUseCase();

		const order = await changeOrderStatus.execute({
			order_id,
			status
		});

		return response.status(200).json({ order });
	}
}