const mongoose = require('mongoose');
const User = require('./user');

const reviewSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    review:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>{
                const regex = /^[a-zA-Zа-яА-Я0-9\s]+$/;
                return regex.test(value)
            },
            message:'Не должно быть лишних символов'
        }
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Review = mongoose.model('Review',reviewSchema);

module.exports = Review;