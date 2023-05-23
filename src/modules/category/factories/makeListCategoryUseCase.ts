import { CategoriesRepository } from '../repositories/categoriesRepository';
import { ListCategoryUseCase } from '../useCases/listCategory/listCategoryUseCase';


export function makeListCategoryUseCase() {

	const categoriesRepository = new CategoriesRepository();
	const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);

	return listCategoryUseCase;
}