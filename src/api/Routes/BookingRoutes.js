import Router from 'express';
import BookingController from '../Controllers/BookingController';
const BookingRouter = new Router();

// Get all Bookings
BookingRouter.route('/restaurants/:restaurantId/bookings').get(BookingController.getBookings);

// Get one Booking by cuid
BookingRouter.route('/restaurants/:restaurantId/bookings/:bookingId').get(BookingController.getBooking);

// Add a new Booking
BookingRouter.route('/restaurants/:restaurantId/bookings/create').post(BookingController.addBooking);

// Delete a Booking by cuid
BookingRouter.route('/restaurants/:restaurantId/bookings/:bookingId').delete(BookingController.deleteBooking);



export default BookingRouter;