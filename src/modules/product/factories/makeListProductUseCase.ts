import { ProductRepository } from '../repositories/productRepository';
import { ListProductUseCase } from '../useCases/listProducts/ListProductUseCase';


export function makeListProductUseCase() {

	const productRepository = new ProductRepository;
	const listProductUseCase = new ListProductUseCase(productRepository);

	return listProductUseCase;
}