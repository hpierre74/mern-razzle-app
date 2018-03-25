import Router from 'express';
import RestaurantController from '../Controller/RestaurantController';
import ServiceRouter from '../../Service/Route/ServiceRoutes';
const RestaurantRouter = new Router();


// Get all Restaurants
RestaurantRouter.route('/restaurants').get(RestaurantController.getRestaurants);

// Get one Restaurant by restaurantId
RestaurantRouter.route('/restaurants/:restaurantId').get(RestaurantController.getRestaurant);

// Add a new Restaurant
RestaurantRouter.route('/restaurant').post(RestaurantController.addRestaurant);

// Delete a Restaurant by restaurantId
RestaurantRouter.route('/restaurants/:restaurantId').delete(RestaurantController.deleteRestaurant);

//----RestaurantRouter.route('/restaurants/:restaurantId/bookings').get(RestaurantController.getRestaurantBookings);
// Use restaurant services API
RestaurantRouter.use('/restaurant/:restaurantId/', ServiceRouter);
// Use restaurant Info API
//RestaurantRouter.use('/restaurants/:restaurantId/', InfoRouter);




export default RestaurantRouter;