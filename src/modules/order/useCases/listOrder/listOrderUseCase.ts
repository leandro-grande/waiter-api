import { OrderRepository } from '../../repositories/OrderRepository';


export class ListOrderUseCase {
	constructor(
		private orderRepository: OrderRepository
	) {}

	async execure() {
		const orders = await this.orderRepository.list();

		return orders;
	}
}