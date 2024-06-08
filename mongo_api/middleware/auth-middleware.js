const jwt = require('jsonwebtoken');

class AuthMiddleware {
    static async isAuth(req, res, next) {
        try {
            const token = await req.headers.authorization.split(" ")[1];
            const decodedToken = await jwt.verify(token, process.env.SECRET_KEY);
            next();
        } catch (err) {
            res.status(400).json({ msg: 'Нехрен сюда лезть' });
        }
    }
    static async isAdmin(req, res, next) {
        try {
            const token = await req.headers.authorization.split(" ")[1];
            const decodedToken = await jwt.verify(token, process.env.SECRET_KEY);
            console.log(decodedToken);
        } catch (err) {
            res.status(400).json({ msg: 'Нехрен сюда лезть' });
        }
    }
}

module.exports = AuthMiddleware;