import Booking from "../Models/Booking";
import cuid from "cuid";

class BookingController {
  static getBookings(req, res) {
    Booking.find()
      .sort("date")
      .exec((err, bookings) => {
        if (err) {
          res.status(500).send(err);
        }
        res.json({ bookings });
      });
  }
  static getBooking(req, res) {
    Booking.findOne({ cuid: req.params.cuid }).exec((err, booking) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ booking });
    });
  }

  static addBooking(req, res) {
    if (
      !req.body.firstname ||
      !req.body.lastname ||
      !req.body.tel ||
      !req.body.email ||
      !req.body.time ||
      !req.body.date ||
      !req.body.service ||
      !req.body.persons
    ) {
      res.status(403).end();
    }
    const newBooking = new Booking(req.body);
    newBooking.cuid = cuid();
    newBooking.save((err, saved) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json({ booking: saved });
    });
  }

  static deleteBooking(req, res) {
    Booking.findOne({ cuid: req.params.cuid }).exec((err, booking) => {
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
