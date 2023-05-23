import { OrderRepository } from '../repositories/OrderRepository';
import { ListOrderUseCase } from '../useCases/listOrder/listOrderUseCase';

export function makeListOrderUseCase() {

	const orderRepository = new OrderRepository;
	const listOrderUseCase = new ListOrderUseCase(orderRepository);

	return listOrderUseCase;
}