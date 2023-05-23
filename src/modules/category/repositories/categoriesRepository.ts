import { Prisma, Product } from '@prisma/client';
import { ICategoriesRepository } from './ICategoriesRepository';
import { prisma } from '@/database/prisma';

export class CategoriesRepository implements ICategoriesRepository {

	async create({ name, icon }: Prisma.CategoryCreateInput) {
		const category = await prisma.category.create({
			data: {
				name,
				icon
			}
		});

		return category;
	}

	async list() {
		const categories = await prisma.category.findMany();

		return categories;
	}

	async findByEmail(name: string) {
		const category = await prisma.category.findFirst({
			where: {
				name
			}
		});

		return category;
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