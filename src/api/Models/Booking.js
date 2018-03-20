import mongoose from 'mongoose';
const Schema = mongoose.Schema;


export const bookingSchema = new Schema({
    email: { type: String, required: true },
    tel: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    datetime: { type: String, required: true },
    service: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    restaurantId: { type: String, required: true },
    persons: { type: String, required: true },
    timestamp: { type: Date, default: Date.now, required: true }
})

bookingSchema.static('forRestaurant', function(restaurantId, callback) {
    return this.find()
    .where({restaurantId: restaurantId})
    .exec((err, bookings) => {
        if(err) {
            return err
        }
        return bookings
    })
})
bookingSchema.static('byId', function(bookingId, callback) {
    return this.findOne({_id: bookingId})
})
bookingSchema.static('byCustomerTel', function({params}, callback) {
    return this.find()
    .where({tel: params.tel}, {restaurantId: params.restaurantId})
    .exec((err, bookings) => {
        return callback(err,bookings)
    })
})

bookingSchema.static('create', function(booking, callback) {
    return booking.save((err, newBooking) => {
        return callback(err, newBooking);
    })
})
export default mongoose.model('Booking', bookingSchema);;
