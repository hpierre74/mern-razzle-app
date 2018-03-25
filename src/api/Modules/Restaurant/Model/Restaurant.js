import mongoose from 'mongoose';
const Schema = mongoose.Schema;




const restaurantSchema = new Schema({
    isConfigured: { type:Boolean, default: false, required: true },
    name: { type: String, required: true },
    owner: { type: String, required: true },
    tel : { type: String, required: true },
    bookings: [{type: String}],
    createdAt: { type: Date, default: Date.now, required: true }
})


restaurantSchema.static('addBooking', function(restaurantId, newBooking, callback) {
    return this.findOneAndUpdate({ _id: restaurantId }, 
        { $addToSet: { bookings :[{_id: newBooking.cuid, date: newBooking.date} ]} }, 
          (err, doc) => {
            return err ? err : doc
      })
});

export default mongoose.model('Restaurant', restaurantSchema);