import { beforeEach, describe, expect, it } from 'vitest';
import { inMemoryOrderRepository } from '../../repositories/inMemory/inMemoryOrderRepository';
import { ChangeOrderStatusUseCase } from './changeOrderStatusUseCase';

let orderRepository: inMemoryOrderRepository;
let changeOrderStatusUseCase: ChangeOrderStatusUseCase;

describe('Change Order Status', () => {
	beforeEach(() => {
		orderRepository = new inMemoryOrderRepository;
		changeOrderStatusUseCase = new ChangeOrderStatusUseCase(orderRepository);
	});

	it('should be able to change order status', async () => {
		const order = await orderRepository.create({
			table: '3',
			orderItem: [
				{
					product_id: 'product-id-1',
					qtd: 3
				}
			]
		});

		await changeOrderStatusUseCase.execute({
			order_id: order.id,
			status: 'IN_PRODUCTION'
		});

		expect(order.status).toEqual(expect.stringMatching('IN_PRODUCTION'));

	});
});