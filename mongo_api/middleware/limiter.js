const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 минут
    max: 100, // ограничить каждый IP до 100 запросов на `windowMs`
    message: 'Слишком много запросов с этого IP, пожалуйста, повторите попытку позже.',
});

module.exports = limiter;