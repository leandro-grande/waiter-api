import { Request, Response } from 'express';
import { z } from 'zod';
import { makeListProductsByCategoryUseCase } from '../../factories/makeListProductsByCaregoriesUseCase';


export class ListProductsByCategoryController {
	async handle(request: Request, response: Response) {
		const listProductsByCategoryBodySchema = z.object({
			category_id: z.string()
		});

		const { category_id } = listProductsByCategoryBodySchema.parse(request.params);

		const listProductsByCategory = makeListProductsByCategoryUseCase();

		const products = await listProductsByCategory.execute(category_id);

		return response.status(200).json({products});
	}
}