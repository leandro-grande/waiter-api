import { Order } from '@prisma/client';
import { OrderRepository } from '../../repositories/OrderRepository';
import { io } from '@/server';

interface IRequest {
	table: string;
	orderItems: {
		product_id: string;
		qtd: number;
	}[]
}

export class CreateOrderUseCase {
	constructor(
		private orderRepository: OrderRepository
	) {}
	async execute({table, orderItems }: IRequest): Promise<Order> {
		const order = await this.orderRepository.create({
			table,
			orderItem: orderItems,
		});

		io.emit('order@new', order);

		return order;
	}

}