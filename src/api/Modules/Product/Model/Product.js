import mongoose from 'mongoose';
const Schema = mongoose.Schema;


export const productSchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit_value: { type: Number, required: true },
    stock_value: { type: Number, required: true },
    unit_sell_value: { type: Number },
    stock_sell_value: { type: Number },
    peremption: { type: Date },
    restaurantId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: true }
})

productSchema.static('forRestaurant', function(restaurantId, callback) {
    return this.find()
    .where({restaurantId: restaurantId})
    .exec((err, products) => {
        return callback(err,products)
    })
})

productSchema.static('byPeremptionDate', function({params}, callback) {
    return this.find()
    .where({peremption: params.peremption}, {restaurantId: params.restaurantId})
    .exec((err, products) => {
        return callback(err,products)
    })
})

productSchema.static('byCategory', function({params}, callback) {
    return this.find()
    .where({category: params.category}, {restaurantId: params.restaurantId})
    .exec((err, products) => {
        return callback(err,products)
    })
})

productSchema.static('byType', function({params}, callback) {
    return this.find()
    .where({type: params.type}, {restaurantId: params.restaurantId})
    .exec((err, products) => {
        return callback(err,products)
    })
})

productSchema.static('create', function(product, callback) {
    return product.save((err, newproduct) => {
        return callback(err, newproduct);
    })
})
export default mongoose.model('Product', productSchema);;
