const News = require('../models/news');

class NewsController {
    static async create(req, res) {
        try {
            const file = req.file;
            const { header, body, author } = req.body;
            const news = new News({
                picture: picture,
                header: header,
                body: body,
                author: author
            });
            await news.save();
            res.status(200).json({ msg: 'Успешно' });
        } catch (err) {
            res.status(500).json({ msg: err });
        }
    }
    static async read(req,res){
        try{
            const news = await News.find({});
            res.status(200).json({news:news});

        }catch(err){
            res.status(500).json({msg:err});
        }
    }
    static async update(req,res){
        try{
        const id = JSON.parse(req.params.id);
        const {header,body} = req.body;
        const news = await News.findById(id);
        news.header = header || news.header;
        news.body = body || news.body;
        await news.save();
        res.status(200).json({msg:'Успешно обновлён'});
        }catch(err){
            res.status(500).json({msg:err});
        }
    }
    static async delete(req,res){
        try{
            const id = JSON.parse(req.params.id);
            const news = await News.findByIdAndDelete(id);
            res.status(200).json({msg:'Успешно удалён'});
        }catch(err){
            res.status(500).json({msg:err});
        }
    }
}

module.exports = NewsController;