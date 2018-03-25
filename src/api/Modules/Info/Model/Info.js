import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const infoSchema = new Schema({
    owner: { type: String, required: true },
    tel: { type: String, required: true }

})

export default mongoose.model('Info', infoSchema);