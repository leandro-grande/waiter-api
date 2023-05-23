import { AppError } from '@/utils/AppError';
import { CategoriesRepository } from '../../repositories/categoriesRepository';

export class ListCategoryUseCase {
	constructor(
		private categoriesRepository: CategoriesRepository
	) {}
	async execute() {
		const categories = this.categoriesRepository.list();
		
		if (!categories) {
			throw new AppError('None category does not exits', 404);
		}

		return categories;
	}

}