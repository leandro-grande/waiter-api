import { Order, STATUS } from '@prisma/client';
import { OrderDTO } from '../dtos/OrderDTO';


export interface IOrderRepository {
	create({table, orderItem}: OrderDTO): Promise<Order>;
	list(): Promise<Order[]>;
	findById(order_id: string): Promise<Order | null>;
	updateOrderStatus(order_id: string, status: STATUS): Promise<Order | null>;
	delete(order_id: string): Promise<void>;
}