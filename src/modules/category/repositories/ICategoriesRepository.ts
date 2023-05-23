import { Category, Prisma } from '@prisma/client';


export interface ICategoriesRepository {
	create({ name, icon }: Prisma.CategoryCreateInput): Promise<Category>;
	list(): Promise<Category[]>;
	findByEmail(name: string): Promise<Category | null>;
}