import { Product } from '@prisma/client';
import { ProductRepository } from '../../repositories/productRepository';


export class ListProductUseCase {
	constructor(
		private productRepository: ProductRepository
	) {}
	async execute(): Promise<Product[]> {
		const products = await this.productRepository.list();

		return products;
	}
}