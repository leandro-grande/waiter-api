import { Prisma, Category } from '@prisma/client';
import { ICategoriesRepository } from '../ICategoriesRepository';
import { randomUUID } from 'node:crypto';


export class inMemoryCategoriesRepository implements ICategoriesRepository {

	public categories: Category[] = [];

	async create({ name, icon }: Prisma.CategoryCreateInput) {
		const category = {
			id: randomUUID(),
			name,
			icon
		};
		
		this.categories.push(category);

		return category;
	}

	async list() {
		return this.categories;
	}

	async findByEmail(name: string) {
		const category = this.categories.find(item => item.name === name);

		if(!category) {
			return null;
		}

		return category;
	}

}