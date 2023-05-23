import { Product } from '@prisma/client';
import { ProductRepository } from '../../repositories/productRepository';
import { ProductDTO } from '../../repositories/IProductRepository';
import { AppError } from '@/utils/AppError';



export class CreateProductUseCase {
	constructor(
		private productRepository: ProductRepository
	) {}
	async execute(data: ProductDTO): Promise<Product> {
		const productAlreadyExists = await this.productRepository.findByName(data.name);

		if (productAlreadyExists) {
			throw new AppError('Product already exist.');
		}

		const product = await this.productRepository.create(data);

		return product;
	}
}