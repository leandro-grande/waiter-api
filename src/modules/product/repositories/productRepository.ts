import { Product } from '@prisma/client';
import { IProductRepository, ProductDTO } from './IProductRepository';
import { prisma } from '@/database/prisma';


export class ProductRepository implements IProductRepository {
	async findByName(name: string) {
		const product = await prisma.product.findFirst({
			where: {
				name
			}
		});

		return product;
	}


	async create(data: ProductDTO): Promise<Product>{
		const product = await prisma.product.create({
			data: {
				name: data.name,
				description: data.description,
				price: data.price,
				imagePath: data.imagePath,
				category_id: data.category_id,
				ingredients: data.ingredients && {
					createMany: {
						data: data.ingredients.map(ingredient => {
							return {
								name: ingredient.name,
								icon: ingredient.icon
							};
						})
					} 
				},
			},
		});
		
		return product;
	}
	
	async list(): Promise<Product[]> {
		const products = await prisma.product.findMany({
			include: {
				ingredients: true
			}
		});
		
		return products;
	}
	
	async findByCategory(category_id: string): Promise<Product[] | null> {
		const products = await prisma.product.findMany({
			where: {
				category_id
			}
		});

		return products;
	}
	
}