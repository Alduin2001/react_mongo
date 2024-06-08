const mongoose = require('mongoose');
const Category = require('./category');

const productSchema = new mongoose.Schema({
    picture: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    }
});
// Операции перед добавлением
// productSchema.pre('save', async function (next) {
//     try {
//         if (this.isNew) {
//             await Category.findByIdAndUpdate(this.category, { $push: { products: this._id } });
//         }
//         next();
//     } catch (err) {
//         next(err);
//     }
// });
// Операции перед удалением
// productSchema.pre('remove', async function(next) {
//     try {
//         await Category.findOneAndUpdate({ _id: this.category }, { $pull: { products: this._id } });
//     } catch (err) {
//         next(err);
//     }
// });


const Product = mongoose.model('Product', productSchema);
module.exports = Product;
