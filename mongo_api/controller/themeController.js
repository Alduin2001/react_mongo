const Theme = require('../models/theme');

class ThemeController {

    static async create(req, res) {
        try {
            const { name, id } = req.body;
            const theme = new Theme({
                name: name,
                course: id
            });
            await theme.save();
            res.status(200).json({ msg: 'Успешно добавлен' });
        } catch (err) {
            res.status(500).json({ msg: err });
        }
    }
    static async read(req, res) {
        try {
            const theme = await Theme.find({});
            res.status(200).json({ theme: theme });
        } catch (err) {
            res.status(500).json({ msg: err });
        }
    }
    static async update(req, res) {
        try {
            const id = JSON.parse(req.params.id);
            const { name } = req.body;
            const theme = await Theme.findById(id);
            theme.name = name || theme.name;
            await theme.save();
            res.status(200).json({ msg: 'Успешно обновлён' });
        } catch (err) {
            res.status(500).json({ msg: err });
        }
    }
    static async delete(req, res) {
        try{
            const id = JSON.parse(req.params.id);
            const deleted = await Theme.findByIdAndDelete(id);
            res.status(200).json({msg:'Успешно удалён'});
        }catch(err){
            res.status(500).json({msg:err});
        }
    }
}

module.exports = ThemeController;