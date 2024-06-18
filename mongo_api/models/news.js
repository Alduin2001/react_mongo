const mongoose = require('mongoose');
const User = require('./user');
const newsSchema = new mongoose.Schema({
    picture:{
        type:String,
        match: /\.(png|jpg)$/i
    },
    header:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const News = mongoose.model('News',newsSchema);

module.exports = News;