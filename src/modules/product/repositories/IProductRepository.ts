import { Product } from '@prisma/client';

export interface ProductDTO {
	name: string, 
	price: number, 
	description: string, 
	category_id: string,
	imagePath: string, 
	ingredients?: {
		name: string;
		icon: string;
	}[]
}

export interface IProductRepository {
	create(data: ProductDTO): Promise<Product>;
	list(): Promise<Product[]>;
	findByName(name: string): Promise<Product | null>
	findByCategory(category_id: string): Promise<Product[] | null>;
}