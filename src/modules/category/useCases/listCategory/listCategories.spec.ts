import { beforeEach, describe, expect, it } from 'vitest';
import { inMemoryCategoriesRepository } from '../../repositories/inMemory/inMemoryCategoriesRepository';
import { ListCategoryUseCase } from './listCategoryUseCase';

let categoriesRepository: inMemoryCategoriesRepository;
let listCategory: ListCategoryUseCase;

describe('List Categories', () => {
	beforeEach(() => {
		categoriesRepository = new inMemoryCategoriesRepository;
		listCategory = new ListCategoryUseCase(categoriesRepository);
	});

	it('should be able to list the categories', async () => {
		await categoriesRepository.create({
			name: 'Bebidas',
			icon: 'icon-name'
		});

		const categories = await listCategory.execute();

		expect(categories).toHaveLength(1);
		expect(categories).toEqual([
			expect.objectContaining({
				name: 'Bebidas',
				icon: 'icon-name'
			})
		]);
	});

	
});