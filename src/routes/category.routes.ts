import { CreateCategoryController } from '@/modules/category/controllers/createCategory/createCategoryController';
import { ListCategoryController } from '@/modules/category/controllers/listCategory/listCategoryController';
import { Router } from 'express';


export const categoryRoutes = Router();

categoryRoutes.post('/categories', new CreateCategoryController().handle);
categoryRoutes.get('/categories', new ListCategoryController().handle);