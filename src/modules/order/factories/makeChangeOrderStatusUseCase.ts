import { OrderRepository } from '../repositories/OrderRepository';
import { ChangeOrderStatusUseCase } from '../useCases/changeOrderStatus/changeOrderStatusUseCase';


export function makeChangeOrderStatusUseCase() {

	const orderRepository = new OrderRepository;
	const changeOrderStatusUseCase = new ChangeOrderStatusUseCase(orderRepository);

	return changeOrderStatusUseCase;
}