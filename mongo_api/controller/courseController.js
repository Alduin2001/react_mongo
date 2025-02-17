const Course = require('../models/course');
const { countDocuments } = require('../models/lecture');

class CourseController {
    static async create(req, res) {
        try {
            const { name, description } = req.body;
            const course = new Course({
                name: name,
                description: description
            });
            await course.save();
            res.status(200).json({ msg: 'Успешно добавлен' });
        } catch (err) {
            res.status(500).json({ msg: err });
        }

    }
    static async read(req, res) {
        try {
            const course = await Course.find({});
            res.status(200).json({ course: course });
        } catch (err) {
            res.status(500).json({ msg: err });
        }
    }
    static async update(req, res) {
        try {
            const id = JSON.parse(req.params.id);
            const { name, description } = req.body;
            const course = await Course.findById(id);
            course.name = name || course.name;
            course.description = description || course.description;
            await course.save();
            res.status(200).json({ msg: 'Успешно обновлён' });
        } catch (err) {
            res.status(500).json({ msg: err });
        }
    }
    static async delete(req,res){
        try{
            const id = JSON.parse(req.params.id);
            const course = await Course.findByIdAndDelete(id);
            res.status(300).json({msg:'Успешно удалён'});
        }catch(err){
            res.status(500).json({msg:err});
        }
    }

}

module.exports = CourseController;