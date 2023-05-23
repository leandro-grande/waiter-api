import { Order, STATUS } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { OrderDTO } from '../../dtos/OrderDTO';
import { IOrderRepository } from '../IOrderRepository';



export class inMemoryOrderRepository implements IOrderRepository {

	async findById(order_id: string): Promise<Order | null> {
		const order = this.order.find(order => order.id === order_id);

		if(!order) {
			return null;
		}

		return order;
	}

	public order: Order[] = [];

	async create({ table, orderItem }: OrderDTO): Promise<Order> {
		const order = {
			id: randomUUID(),
			table,
			orderItem,
			status: STATUS['WAITING'],
			createdAt: new Date()
		};

		this.order.push(order);

		return order;
	}

	async list(): Promise<Order[]> {
		return this.order;
	}

	async updateOrderStatus(order_id: string, status: STATUS): Promise<Order | null> {
		const orderIndex = this.order.findIndex(order => order.id === order_id);

		if (orderIndex === -1) {
			return null;
		}

		this.order[orderIndex].status = status;

		return this.order[orderIndex];
	}

	async delete(order_id: string): Promise<void> {
		const orderIndex = this.order.findIndex(order => order.id === order_id);

		this.order.splice(orderIndex, 1);
	}

}