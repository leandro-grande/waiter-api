import { CreateProductController } from '@/modules/product/controller/createProduct/createProductController';
import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@/config/multer';
import { ListProductController } from '@/modules/product/controller/listProduct/listProductController';
import { ListProductsByCategoryController } from '@/modules/product/controller/listProductsByCategory/listProductsByCategoryController';

export const productRoutes = Router();

const upload = multer(uploadConfig.upload('./tmp'));

productRoutes.get('/products', new ListProductController().handle);
productRoutes.post('/products', upload.single('image'), new CreateProductController().handle);
productRoutes.get('/categories/:category_id/products', new ListProductsByCategoryController().handle);