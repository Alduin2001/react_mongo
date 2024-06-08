const mongoose = require('mongoose');
const Course = require('./course');
const Lecture = require('./lecture');
const themeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    lectures:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Lecture'}
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
});

themeSchema.pre('remove',async function(next){
    try{
        const lecture = await Lecture.deleteMany({theme:this._id});
        next();
    }catch(err){
        console.log(err);   
    }
})
const Theme = mongoose.model('Theme',themeSchema);

module.exports = Theme;