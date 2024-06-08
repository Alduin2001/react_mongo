const mongoose = require('mongoose');
const Product = require('./product');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Product'
    }]
});
// Перед удалением категории удаляться должен товар
categorySchema.pre('remove',async function(next){
    try{
        await Product.deleteMany({category:this._id});
        next();
    }catch(err){
        console.log(err);
        next();
    }
});
const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
