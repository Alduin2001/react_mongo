const mongoose = require('mongoose');
const Theme = require('./theme');
const courseSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    themes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Theme'
        }
    ],
    description:{
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
    marks:{
        type:Array,
        default:[]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

courseSchema.pre('remove', async function(next) {
    try {
        await Theme.deleteMany({ course: this._id });
        next();
    } catch (err) {
        console.log(err);
    }
});

const Course = mongoose.model('Course',courseSchema);

module.exports = Course;