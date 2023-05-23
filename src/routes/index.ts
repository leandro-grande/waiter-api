import { Router } from 'express';
import { categoryRoutes } from './category.routes';
import { productRoutes } from './product.routes';
import { orderRoutes } from './order.routes';

export const routes = Router();

routes.use(categoryRoutes);
routes.use(productRoutes);
routes.use(orderRoutes);