import Router from 'express';
import ServiceController from '../Controllers/ServiceController';
const ServiceRouter = new Router();

// Get all Services
ServiceRouter.route('/services').get(ServiceController.getServices);

// Get one Service by name
ServiceRouter.route('/services/:name').get(ServiceController.getService);

// Add a new Service
ServiceRouter.route('/service').post(ServiceController.addService);

// Delete a Service by cuid
ServiceRouter.route('/services/:name').delete(ServiceController.deleteService);

export default ServiceRouter;