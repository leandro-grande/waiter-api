import { Request, Response } from 'express';
import { z } from 'zod';
import { makeCreateCategoryUseCase } from '../../factories/makeCreateCategoryUseCase';


export class CreateCategoryController {
	async handle(request: Request, response: Response) {
		const createCategoryBody = z.object({
			name: z.string(),
			icon: z.string()
		});

		const { name, icon } = createCategoryBody.parse(request.body);

		const createCategory = makeCreateCategoryUseCase();

		const category = await createCategory.execute({
			name,
			icon
		});

		return response.status(201).json(category);
	}
}