const mongoose = require('mongoose');
const Theme = require('./theme');
const lectureSchema = new mongoose.Schema({
    number:{
        type:Number,
        required:true
    },
    exerscise:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>{
                const regex = /^[a-zA-Zа-яА-Я0-9\s]+$/;
                return regex.test(value)
            },
            message:'Не должно быть посторонних символов'
        }
    },
    theme:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Theme'
    },
    content:{
        type:String,
        required:true,
        validate:{
            validator:(value)=>{
                const regex = /^[a-zA-Zа-яА-Я0-9\s]+$/;
                return regex.test(value)
            },
            message:'Не должно быть посторонних символов'
        }
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const Lecture = mongoose.model('Lecture',lectureSchema);

module.exports = Lecture;