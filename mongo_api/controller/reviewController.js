const Review = require('../models/review');

class ReviewController{

    static async create(req,res){
        try{
            const {user, review} = req.body;
            const rev = new Review({
                user:user,
                review:review
            });
            await rev.save();
            res.status(200).json({msg:'Успешно добавлен'});
        }catch(err){
            res.status(500).json({msg:err});
        }
    }
    static async read(req,res){
        try{
            const rev = await Review.find({});
            res.status(200).json({rev:rev});
        }catch(err){
            res.status(500).json({msg:err});
        }
    }
    static async update(req,res){
        try{    
            const id = JSON.parse(req.params.id);
            const {review} = req.body;
            const rev = await Review.findById(id);
            res.status(200).json({msg:'Успешно обновлён'});
        }catch(err){
            res.status(500).json({msg:err});
        }
    }
    static async delete(req,res){
        try{
            const id = JSON.parse(req.params.id);
            const rev = Review.findByIdAndDelete(id);
            res.status(200).json({msg:'Успешно удалён'});
        }catch(err){
            res.status(500).json({msg:err});
        }
    }
}

module.exports = ReviewController;