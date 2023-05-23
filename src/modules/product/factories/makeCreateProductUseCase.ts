import { ProductRepository } from '../repositories/productRepository';
import { CreateProductUseCase } from '../useCases/createProduct/createProductUseCase';


export function makeCreateProductUseCase() {

	const productRepository = new ProductRepository;
	const createProductUseCase = new CreateProductUseCase(productRepository);

	return createProductUseCase;
}