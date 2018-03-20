import Booking from "../Models/Booking";
import cuid from "cuid";
//import Restaurant from "../Models/Restaurant";

class BookingController {
  static getBookings(req, res) {
    Booking.forRestaurant(req.params.restaurantId, (err, bookings) => {
      err ? res.status(404).send() : res.json(Booking.byRestaurant(req.params.restaurantId))
    })
  }
  static getBooking(req, res) {
    Booking.findOne({ _id: req.params.bookingId }).exec((err, booking) => {
      err ? res.status(500).send(err): res.json({ booking });
    });
  }

  static addBooking(req, res) {
    let newBooking = new Booking(req.body);
    newBooking.cuid = cuid();
    Booking.create(newBooking,(err, booking) => {
      err? res.status(500).send(err) : res.json({booking})
    })
  }

  static deleteBooking(req, res) {
    Booking.findOne({ _id: req.params.bookingId }).exec((err, booking) => {
        if (err) {
          res.status(500).send(err);
        }  
        booking.remove(() => {
          res.status(200).end();
        });
    });
  }
}
export default BookingController;
