import Router from 'express';
import BookingController from '../Controllers/BookingController';
const BookingRouter = new Router();

// Get all Bookings
BookingRouter.route('/bookings').get(BookingController.getBookings);

// Get one Booking by cuid
BookingRouter.route('/bookings/:cuid').get(BookingController.getBooking);

// Add a new Booking
BookingRouter.route('/booking').post(BookingController.addBooking);

// Delete a Booking by cuid
BookingRouter.route('/bookings/:cuid').delete(BookingController.deleteBooking);

export default BookingRouter;