import {rateLimit} from 'express-rate-limiter';

const limiter = rateLimit({
    windowMs:15*60*1000,
    max:100,
    message:'Слишком много запросов'
});
module.exports = limiter;