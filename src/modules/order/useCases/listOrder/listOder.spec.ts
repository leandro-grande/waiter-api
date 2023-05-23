import { beforeEach, describe, expect, it } from 'vitest';
import { inMemoryOrderRepository } from '../../repositories/inMemory/inMemoryOrderRepository';
import { ListOrderUseCase } from './listOrderUseCase';

let orderRepository: inMemoryOrderRepository;
let listOrderUseCase: ListOrderUseCase;

describe('List Orders', () => {
	beforeEach(() => {
		orderRepository = new inMemoryOrderRepository();
		listOrderUseCase = new ListOrderUseCase(orderRepository);
	});

	it('should be able to list orders', async () => {
		await orderRepository.create({
			table: '3',
			orderItem: [
				{
					product_id: 'product-id-1',
					qtd: 3
				}
			]
		});

		const order = await listOrderUseCase.execure();

		expect(order).toHaveLength(1);
		expect(order).toEqual([
			expect.objectContaining({
				table: '3'
			})
		]);
	});

});