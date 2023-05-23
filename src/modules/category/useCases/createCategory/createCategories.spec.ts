import { beforeEach, describe, expect, it } from 'vitest';
import { CreateCategoryUseCase } from './createCategoryUseCase';
import { inMemoryCategoriesRepository } from '../../repositories/inMemory/inMemoryCategoriesRepository';
import { AppError } from '@/utils/AppError';

let categoriesRepository: inMemoryCategoriesRepository;
let createCategories: CreateCategoryUseCase;

describe('Create Category', () => {
	beforeEach(() => {
		categoriesRepository = new inMemoryCategoriesRepository();
		createCategories = new CreateCategoryUseCase(categoriesRepository);
	});

	it('should be able to create a category', async () => {
		const category = await createCategories.execute({
			name: 'Bebidas',
			icon: 'icon-name'
		});

		expect(category.id).toEqual(expect.any(String));
	});

	it('should not be able to create a category with same name', async () => {
		await createCategories.execute({
			name: 'Bebidas',
			icon: 'icon-name'
		});

		await expect(() => 
			createCategories.execute({
				name: 'Bebidas',
				icon: 'icon-name'
			}),
		).rejects.toBeInstanceOf(AppError);
	});
});