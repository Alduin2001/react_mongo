const Lecture = require('../models/lecture');

class LectureController {

    static async create(req, res) {
        try {
            const { number, excerscise, theme, content } = req.body;
            const lecture = new Lecture({
                number: parseInt(number),
                exerscise: excerscise,
                theme: theme,
                content: content
            });
            await lecture.save();
            res.status(200).json({ msg: 'Успешно добавлен' });
        } catch (err) {
            res.status(500).json({ msg: err });
        }
    }
    static async read(req, res) {
        try {
            const lecture = await Lecture.find({});
            res.status(200).json({ lecture: lecture });
        } catch (err) {
            res.status(500).json({ msg: err });
        }
    }
    static async update(req, res) {
        try {
            const id = JSON.parse(req.params.id);
            const { number, exerscise, content } = req.body;
            const lecture = await Lecture.findById(id);
            lecture.number = number || lecture.number;
            lecture.exerscise = exerscise || lecture.exerscise;
            lecture.content = content || lecture.content;
            await lecture.save();
            res.status(200).json({msg:'Успешно обновлён'});
        } catch (err) {
            res.status(500).json({msg:err});
        }
    }
    static async delete(req, res) {
        try{
            const id = JSON.parse(req.params.id);
            const lecture = await Lecture.findByIdAndDelete(id);
            res.status(200).json({msg:'Успешно удалён'});
        }catch(err){
            res.status(500).json({msg:err});
        }
    }
}

module.exports = LectureController;