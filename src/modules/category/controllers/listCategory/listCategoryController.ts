import { Request, Response } from 'express';
import { makeListCategoryUseCase } from '../../factories/makeListCategoryUseCase';


export class ListCategoryController {
	
	async handle(request: Request, response: Response) {

		const listCategory = makeListCategoryUseCase();

		const categories = await listCategory.execute();

		return response.status(200).json({categories});
	}
}