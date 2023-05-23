import { CategoriesRepository } from '../repositories/categoriesRepository';
import { CreateCategoryUseCase } from '../useCases/createCategory/createCategoryUseCase';


export function makeCreateCategoryUseCase() {

	const categoriesRepository = new CategoriesRepository();
	const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

	return createCategoryUseCase;
}