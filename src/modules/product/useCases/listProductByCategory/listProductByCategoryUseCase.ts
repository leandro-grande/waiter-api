import { Product } from '@prisma/client';
import { ProductRepository } from '../../repositories/productRepository';


export class ListProductByCategoryUseCase {
	constructor(
		private productsRepository: ProductRepository
	) {}
	async execute(category_id: string): Promise<Product[] | null> {
		const products = await this.productsRepository.findByCategory(category_id);

		return products;
	}
}