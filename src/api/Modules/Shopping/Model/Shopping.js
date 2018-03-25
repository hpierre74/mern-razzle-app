import mongoose from 'mongoose';
const Schema = mongoose.Schema;


export const shoppingSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String ,required: true },
    current_stock: { type: Number , required: true },
    quantity: { type: Number, required: true },
    restaurantId: { type: String, required: true },
    pending: { type: Boolean, default: true, required: true },
    isUrgent: { type: Boolean, default:false, required: true},
    createdAt: { type: Date, default: Date.now, required: true }
})

shoppingSchema.static('list', function(restaurantId, callback) {
    return this.find()
    .where({restaurantId: restaurantId})
    .exec((err, shoppingItems) => {
        return callback(err,shoppingItems)
    })
})


shoppingSchema.static('byCategory', function({params}, callback) {
    return this.find()
    .where({category: params.category}, {restaurantId: params.restaurantId})
    .exec((err, shoppingItems) => {
        return callback(err,shoppingItems)
    })
})

shoppingSchema.static('byType', function({params}, callback) {
    return this.find()
    .where({type: params.type}, {restaurantId: params.restaurantId})
    .exec((err, shoppingItems) => {
        return callback(err,shoppingItems)
    })
})

shoppingSchema.static('createItem', function(shoppingItem, callback) {
    return shoppingItem.save((err, newShoppingItem) => {
        return callback(err, newShoppingItem);
    })
})
export default mongoose.model('Shopping', shoppingSchema);;
