import Router from 'express';
import ShoppingController from '../Controller/ShoppingController';
const ShoppingRouter = new Router();

// Get all Shops
ShoppingRouter.route('/restaurants/:restaurantId/shopping').get(ShoppingController.getShoppingList);

// Get one Shop by cuid
ShoppingRouter.route('/restaurants/:restaurantId/shopping/:shopId').get(ShoppingController.getShoppingItem);


// Get one Shop by name
ShoppingRouter.route('/restaurants/:restaurantId/shopping/name/:name').get(ShoppingController.getShoppingItemByName);


// Add a new Shop
ShoppingRouter.route('/restaurants/:restaurantId/shopping/create').post(ShoppingController.addShoppingItem);

// Delete a Shop by cuid
ShoppingRouter.route('/restaurants/:restaurantId/shopping/:shopId').delete(ShoppingController.deleteShoppingItem);



export default ShoppingRouter;