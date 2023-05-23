
import { Order, STATUS } from '@prisma/client';
import { OrderDTO } from '../dtos/OrderDTO';
import { IOrderRepository } from './IOrderRepository';
import { prisma } from '@/database/prisma';


export class OrderRepository implements IOrderRepository {

	async findById(order_id: string): Promise<Order | null> {
		const order = await prisma.order.findFirst({
			where: {
				id: order_id
			}
		});

		return order;
	}

	async create({ orderItem, table }: OrderDTO): Promise<Order> {
		const order = await prisma.order.create({
			data: {
				table,
				orderItems: {
					createMany: {
						data: orderItem.map(item => {
							return {
								product_id: item.product_id,
								qtd: item.qtd
							};
						})
					}				
				}
			},
			include: {
				orderItems: {
					select: {
						id: true,
						qtd: true,
						product: true,
					}
				}
			}
		});	

		return order;
	}

	async list(): Promise<Order[]> {
		const orders = await prisma.order.findMany({
			orderBy: {
				createdAt: 'asc'
			},
			include: {
				orderItems: {
					select: {
						id: true,
						qtd: true,
						product: true,
					}
				}
			}
		});

		return orders;
	}

	async updateOrderStatus(order_id: string, status: STATUS): Promise<Order | null> {
		const order = await prisma.order.update({
			where: {
				id: order_id
			},
			data: {
				status
			}
		});

		return order;
	}

	async delete(order_id: string): Promise<void> {
		await prisma.order.delete({
			where: {
				id: order_id
			}
		});
	}
}