import Router from 'express';
import ProductController from '../Controllers/ProductController';
const ProductRouter = new Router();

// Get all Products
ProductRouter.route('/restaurants/:restaurantId/products').get(ProductController.getProducts);

// Get one Product by cuid
ProductRouter.route('/restaurants/:restaurantId/products/:productId').get(ProductController.getProduct);

// Add a new Product
ProductRouter.route('/restaurants/:restaurantId/products/create').post(ProductController.addProduct);

// Delete a Product by cuid
ProductRouter.route('/restaurants/:restaurantId/products/:productId').delete(ProductController.deleteProduct);



export default ProductRouter;