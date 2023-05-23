import { beforeEach, describe, expect, it } from 'vitest';
import { InMemoryProductRepository } from '../../repositories/inMemory/inMemoryProductRepository';
import { ListProductByCategoryUseCase } from './listProductByCategoryUseCase';

let productsRepository: InMemoryProductRepository;
let listProductByCategoryUseCase: ListProductByCategoryUseCase;

describe('List Products by Category', () => {
	beforeEach(() => {
		productsRepository = new InMemoryProductRepository();
		listProductByCategoryUseCase = new ListProductByCategoryUseCase(productsRepository);
	});

	it('should be able to list products by category', async() => {
		
		await productsRepository.create({
			name: 'Pizza 4 queijos',
			description: 'Pizza 4 queijos com molho',
			price: 8,
			imagePath: 'image-url',
			category_id: 'category-id-123',
		});

		await productsRepository.create({
			name: 'Pizza Provolone',
			description: 'Pizza Provolone com molho',
			price: 8,
			imagePath: 'image-url',
			category_id: 'category-id-123',
		});

		await productsRepository.create({
			name: 'Pizza Atum',
			description: 'Pizza de Atum com cebola',
			price: 8,
			imagePath: 'image-url',
			category_id: 'category-id-124',
		});

		const productsByCategory = await listProductByCategoryUseCase.execute('category-id-123');

		expect(productsByCategory).toHaveLength(2);
	
	});

});