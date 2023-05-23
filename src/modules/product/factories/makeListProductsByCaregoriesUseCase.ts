import { CategoriesRepository } from '../../category/repositories/categoriesRepository';
import { ListProductByCategoryUseCase } from '../useCases/listProductByCategory/listProductByCategoryUseCase';


export function makeListProductsByCategoryUseCase() {

	const categoriesRepository = new CategoriesRepository();
	const listProductsByCategoryUseCase = new ListProductByCategoryUseCase(categoriesRepository);

	return listProductsByCategoryUseCase;
}