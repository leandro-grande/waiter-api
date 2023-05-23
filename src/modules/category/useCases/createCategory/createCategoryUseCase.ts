import { Category } from '@prisma/client';
import { CategoriesRepository } from '../../repositories/categoriesRepository';
import { AppError } from '@/utils/AppError';

interface ICreateCategoryRequest {
	name: string;
	icon: string;
}

export class CreateCategoryUseCase {
	constructor(
		private categoriesRepository: CategoriesRepository
	) {}
	async execute({ name, icon }: ICreateCategoryRequest): Promise<Category> {

		const categoryAlreadyExist = await this.categoriesRepository.findByEmail(name);

		if (categoryAlreadyExist) {
			throw new AppError('This category already exists');
		}

		const category = await this.categoriesRepository.create({
			name, 
			icon
		});


		return category;
	}

}