const User = require('../models/user');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
class UserController {
    //Metod create
    static async create(req, res) {
        try {
            const { firstname, lastname, login, password } = req.body;
            const user = new User({
                firstname: firstname,
                lastname: lastname,
                login: login,
                password: password
            });
            await user.save();
            res.status(200).json({ msg: 'Добавлен' });
        } catch (err) {
            res.status(500).json({ msg: err });
        }
    }
    //Metod auth
    static async auth(req, res) {
        console.log(req.body);
        try {
            const { login, password } = req.body;
            const findedByLogin = await User.findOne({ login: login });
            //If not found by login
            if (!findedByLogin) {
                res.status(400).json({ msg: 'Пользователь не найден' });
            } else {
                const findByPassword = await bcrypt.compare(password, findedByLogin.password);
                // If not found by password
                if (!findByPassword) {
                    res.status(400).json({ msg: 'Пароль неправильный' });
                } else {
                    const userData = {
                        id: findedByLogin.id,
                        firstname: findedByLogin.firstname,
                        lastname: findedByLogin.lastname,
                        login: findedByLogin.login,
                        role: findedByLogin.role

                    };
                    const token = jwt.sign(userData, process.env.SECRET_KEY, { expiresIn: '1h' });
                    res.status(200).json({ token: token });
                }
            }
        } catch (err) {
            res.status(500).json({ msg: err });
        }
    }
    static async read(req, res) {
        try {
            const { page, limit } = req.query;
            let skip = (page - 1) * limit;
            const users = await User.find({}).skip(skip).limit(limit);
            //All objects
            const totalUsers = await User.countDocuments();
            res.status(200).json({
                users: users,
                pages: Math.ceil(totalUsers / limit),
                page: page
            });
        }
        catch (err) {
            res.status(500).json({msg:err});
        }
    }
    static async update(req, res) {
        try{
            const id = JSON.parse(req.params.id);
            
        }catch(err){

        }
        
        
    }
    static async delete(req, res) {

    }
    static async reset(req, res) {
        let transporter = await nodemailer.createTransport({
            host: '',
            port: 587,
            secure: true,
            auth: {
                user: '',
                pass: ''
            }
        })
    }
}

module.exports = UserController;