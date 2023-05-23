import { beforeEach, describe, expect, it } from 'vitest';
import { inMemoryOrderRepository } from '../../repositories/inMemory/inMemoryOrderRepository';
import { CreateOrderUseCase } from './createOrderUseCase';

let orderRepository: inMemoryOrderRepository;
let createOrderUseCase: CreateOrderUseCase;

describe('Create Order', () => {
	beforeEach(() => {
		orderRepository = new inMemoryOrderRepository();
		createOrderUseCase = new CreateOrderUseCase(orderRepository);
	});

	it('should be able to create an order', async () => {
		const order = await createOrderUseCase.execute({
			table: '3',
			orderItems: [
				{
					product_id: 'product-id-1',
					qtd: 3
				}
			]
		});

		expect(order.id).toEqual(expect.any(String));
	});

});