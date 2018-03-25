import express from 'express';
import RestaurantRouter from '../Modules/Restaurant/Route/RestaurantRoutes';
import BookingRouter from '../Modules/Booking/Route/BookingRoutes';
import ProductRouter from '../Modules/Product/Route/ProductRoutes';
import ShoppingRouter from '../Modules/Shopping/Route/ShoppingRoutes';
import expressJwt from 'express-jwt';
import config from './config';
// import UserRouter from '../Modules/User/Route/UserRoutes';
// import ServiceRouter from '../Modules/Service/Route/ServiceRoutesRoutes';


const Router = express.Router(); // eslint-disable-line new-cap


Router.use('/',expressJwt({ secret: config.jwtSecret }), BookingRouter);

Router.use('/',expressJwt({ secret: config.jwtSecret }), RestaurantRouter);

// Router.use('/services', ServiceRouter);

Router.use('/', expressJwt({ secret: config.jwtSecret }),ProductRouter);

//Router.use('/infos', InfoRouter);

Router.use('/', expressJwt({ secret: config.jwtSecret }),ShoppingRouter);

// Router.use('/users', UserRouter);




export default Router;
