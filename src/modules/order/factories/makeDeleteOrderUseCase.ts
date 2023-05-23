import { OrderRepository } from '../repositories/OrderRepository';
import { DeleteOrderUseCase } from '../useCases/deleteOrder/deleteOrderUseCase';

export function makeDeleteOrderUseCase() {

	const orderRepository = new OrderRepository;
	const deleteOrderUseCase = new DeleteOrderUseCase(orderRepository);

	return deleteOrderUseCase;
}