import { OrderRepository } from '../repositories/OrderRepository';
import { CreateOrderUseCase } from '../useCases/createOrder/createOrderUseCase';


export function makeCreateOrderUseCase() {

	const orderRepository = new OrderRepository;
	const createOrderUseCase = new CreateOrderUseCase(orderRepository);

	return createOrderUseCase;
}