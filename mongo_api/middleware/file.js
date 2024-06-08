const multer = require('multer');
const path = require('path');
const allow = ['image/jpeg','image/png'];
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.resolve(__dirname,'..','uploads'));
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date().now()}-${file.originalname}`);
    }
});

const upload = multer({
    storage:storage,
    fileFilter:(req,file,cb)=>{
        if(allow.includes(file.mimetype)){
            cb(null,true);
        }else{
            cb(new Error('Недопустимый формат'),false);
        }
    }
});

module.exports = upload;