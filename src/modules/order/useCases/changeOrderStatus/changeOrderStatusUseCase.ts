import { Order, STATUS } from '@prisma/client';
import { OrderRepository } from '../../repositories/OrderRepository';
import { AppError } from '@/utils/AppError';

interface IRequest {
	order_id: string;
	status: STATUS;
}

export class ChangeOrderStatusUseCase {
	constructor(
		private orderRepository: OrderRepository
	) {}
	async execute({order_id, status}: IRequest): Promise<Order | null> {
		const orderExists = await this.orderRepository.findById(order_id);

		if (!orderExists) {
			throw new AppError('Order does not exist', 404);
		}

		const order = await this.orderRepository.updateOrderStatus(order_id, status);

		return order;

	}

}