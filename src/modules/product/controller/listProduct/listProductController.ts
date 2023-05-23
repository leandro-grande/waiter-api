import { Request, Response } from 'express';
import { makeListProductUseCase } from '../../factories/makeListProductUseCase';


export class ListProductController {
	async handle(request: Request, response: Response) {

		const listProduct = makeListProductUseCase();

		const products = await listProduct.execute();

		return response.status(200).json(products);

	}

}