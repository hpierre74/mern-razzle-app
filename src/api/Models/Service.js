import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const serviceSchema = new Schema({
    name : { type : String, required: true },
    start: {
        hours: { type: Number, required: true, min: 0, max: 23 },
        minutes: { type: Number, required: true, min: 0, max: 59 }
    },
    end: {
        hours: { type: Number, required: true, min: 0, max: 23 },
        minutes: { type: Number, required: true, min: 0, max: 59 }
    },
    maxPersons: { type: Number, required: true },
    lateTime: {
        hours: { type: Number, required: true, min: 0, max: 23 },
        minutes: { type: Number, required: true, min: 0, max: 59 }
    }
})

export default mongoose.model('Service', serviceSchema);