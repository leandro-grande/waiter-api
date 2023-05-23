import { Router } from 'express';

import { ChangeOrderStatusController } from '@/modules/order/controllers/changeOrderStatus/changeOrderStatusController';
import { CreateOrderController } from '@/modules/order/controllers/createOrder/createOrderController';
import { DeleteOrderController } from '@/modules/order/controllers/deleteOrder/deleteOrderController';
import { ListOrderController } from '@/modules/order/controllers/listOrder/listOrderController';


const orderRoutes = Router();

orderRoutes.post('/orders', new CreateOrderController().handle);
orderRoutes.get('/orders', new ListOrderController().handle);
orderRoutes.patch('/orders/:order_id', new ChangeOrderStatusController().handle);
orderRoutes.delete('/orders/:order_id', new DeleteOrderController().handle);

export { orderRoutes };