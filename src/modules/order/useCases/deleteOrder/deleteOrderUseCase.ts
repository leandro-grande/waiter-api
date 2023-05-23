import { AppError } from '@/utils/AppError';
import { OrderRepository } from '../../repositories/OrderRepository';


export class DeleteOrderUseCase {
	constructor(
		private orderRepository: OrderRepository
	) {}
	async execute(order_id: string) {
		const orderExists = await this.orderRepository.findById(order_id);

		if (!orderExists) {
			throw new AppError('Order does not exist', 404);
		}

		await this.orderRepository.delete(order_id);
	}
}