import { IProductRepository, ProductDTO } from '../IProductRepository';
import { randomUUID } from 'node:crypto';

interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	category_id: string;
	imagePath: string;
	ingredients?: {
		name: string;
		icon: string;
	}[]
}

export class InMemoryProductRepository implements IProductRepository {

	public product: Product[] = [];

	async create(data: ProductDTO){
		const product = {
			id: randomUUID(),
			name: data.name,
			description: data.description,
			price: data.price,
			category_id: data.category_id,
			imagePath: data.imagePath,
			ingredients: data.ingredients ? data.ingredients : []
		};

		this.product.push(product);

		return product;
	}

	async list() {
		return this.product;
	}

	async findByCategory(category_id: string) {
		const products = this.product.filter(item => item.category_id === category_id);

		if(!products) {
			return null;
		}

		return products;
	}

	async findByName(name: string) {
		const product = this.product.find(item => item.name === name);

		if (!product) {
			return null;
		}

		return product;
	}

}