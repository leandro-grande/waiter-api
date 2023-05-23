import { beforeEach, describe, expect, it } from 'vitest';
import { InMemoryProductRepository } from '../../repositories/inMemory/inMemoryProductRepository';
import { ListProductUseCase } from './ListProductUseCase';


let productRepository: InMemoryProductRepository;
let listProductUseCase: ListProductUseCase;

describe('List Products', () => {
	beforeEach(() => {
		productRepository = new InMemoryProductRepository();
		listProductUseCase = new ListProductUseCase(productRepository);
	});

	it('should be able to list products', async () => {
		await productRepository.create({
			name: 'Pizza 4 queijos',
			description: 'Pizza 4 queijos com molho',
			price: 8,
			imagePath: 'image-url',
			category_id: 'category-id',
		});

		const products = await listProductUseCase.execute();

		expect(products).toHaveLength(1);
		expect(products).toEqual([
			expect.objectContaining({
				name: 'Pizza 4 queijos',
				description: 'Pizza 4 queijos com molho',
			})
		]);
	});

});