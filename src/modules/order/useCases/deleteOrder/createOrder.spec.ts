import { beforeEach, describe, expect, it } from 'vitest';
import { inMemoryOrderRepository } from '../../repositories/inMemory/inMemoryOrderRepository';
import { DeleteOrderUseCase } from './deleteOrderUseCase';

let orderRepository: inMemoryOrderRepository;
let deleteOrderUseCase: DeleteOrderUseCase;

describe('Delete Order', () => {
	beforeEach(() => {
		orderRepository = new inMemoryOrderRepository();
		deleteOrderUseCase = new DeleteOrderUseCase(orderRepository);
	});

	it('should be able to delete an order', async () => {
		const order = await orderRepository.create({
			table: '3',
			orderItem: [
				{
					product_id: 'product-id-1',
					qtd: 3
				}
			]
		});

		await deleteOrderUseCase.execute(order.id);

		const listOrder = await orderRepository.list();

		expect(listOrder).toHaveLength(0);
	});

});