const jwt = require('jsonwebtoken');

class AuthMiddleware {
    // Метод для верификации токена
    static verifyToken(req, res, next) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
            req.user = decodedToken; // Сохраняем данные пользователя в объекте запроса
            next();
        } catch (err) {
            res.status(401).json({ error: 'Не авторизован' });
        }
    }
    // Метод для проверки авторизован ли пользователь
    static isAuth(req, res, next) {
        AuthMiddleware.verifyToken(req, res, (err) => {
            if (err) {
                res.status(401).json({ error: 'Не авторизован' });
            } else {
                next();
            }
        });
    }
    // Метод для проверки является ли пользователь админом или преподом
    static isAdminOrTeacher(req, res, next) {
        AuthMiddleware.verifyToken(req, res, (err) => {
            if (err) {
                res.status(401).json({ error: 'Не авторизован' });
            } else {
                if (req.user.role === 'Админ' || req.user.role === 'Препод') {
                    next();
                } else {
                    res.status(403).json({ error: 'Доступ запрещен' });
                }
            }
        });
    }
    // Метод для проверки является ли пользователь админом или преподом
    static isAdminOrModerator(req, res, next) {
        AuthMiddleware.verifyToken(req, res, (err) => {
            if (err) {
                res.status(401).json({ error: 'Не авторизован' });
            } else {
                if (req.user.role === 'Админ' || req.user.role === 'Модератор') {
                    next();
                } else {
                    res.status(403).json({ error: 'Доступ запрещен' });
                }
            }
        });
    }
    // Метод для проверки является ли пользователь админом
    static isAdmin(req, res, next) {
        AuthMiddleware.verifyToken(req, res, (err) => {
            if (err) {
                res.status(401).json({ error: 'Не авторизован' });
            } else {
                if (req.user.role === 'Админ') {
                    next();
                } else {
                    res.status(403).json({ error: 'Доступ запрещен' });
                }
            }
        });
    }
    // Метод для проверки является ли пользователь преподом
    static isTeacher(req, res, next) {
        AuthMiddleware.verifyToken(req, res, (err) => {
            if (err) {
                res.status(401).json({ error: 'Не авторизован' });
            } else {
                if (req.user.role === 'Препод') {
                    next();
                } else {
                    res.status(403).json({ error: 'Доступ запрещен' });
                }
            }
        });
    }
    // Метод для проверки является ли пользователь модератором
    static isModerator(req, res, next) {
        AuthMiddleware.verifyToken(req, res, (err) => {
            if (err) {
                res.status(401).json({ error: 'Не авторизован' });
            } else {
                if (req.user.role === 'Модератор') {
                    next();
                } else {
                    res.status(403).json({ error: 'Доступ запрещен' });
                }
            }
        });
    }
}

module.exports = AuthMiddleware;