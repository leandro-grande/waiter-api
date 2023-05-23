import { beforeEach, describe, expect, it } from 'vitest';
import { InMemoryProductRepository } from '../../repositories/inMemory/inMemoryProductRepository';
import { CreateProductUseCase } from '../createProduct/createProductUseCase';
import { AppError } from '@/utils/AppError';

let productRepository: InMemoryProductRepository;
let createProduct: CreateProductUseCase;

describe('Create Product', () => {
	beforeEach(() => {
		productRepository = new InMemoryProductRepository();
		createProduct = new CreateProductUseCase(productRepository);
	});

	it('should able to create a product', async () => {
		const product = await createProduct.execute({
			name: 'Pizza 4 queijos',
			description: 'Pizza 4 queijos com molho',
			price: 8,
			imagePath: 'image-url',
			category_id: 'category-id',
			ingredients: [
				{
					name: 'molho',
					icon: ''
				},
				{
					name: 'queijo',
					icon: ''
				},
			]
		});

		expect(product.id).toEqual(expect.any(String));
	});

	it ('should be able not create a product with same name', async () => {
		await createProduct.execute({
			name: 'Pizza 4 queijos',
			description: 'Pizza 4 queijos com molho',
			price: 8,
			imagePath: 'image-url',
			category_id: 'category-id',
			ingredients: [
				{
					name: 'molho',
					icon: ''
				},
				{
					name: 'queijo',
					icon: ''
				},
			]
		});

		await expect(() => 
			createProduct.execute({
				name: 'Pizza 4 queijos',
				description: 'Pizza 4 queijos com molho',
				price: 8,
				imagePath: 'image-url',
				category_id: 'category-id',
			})
		).rejects.toBeInstanceOf(AppError);
	});

});