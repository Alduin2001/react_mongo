import { observer } from "mobx-react";
import React,{FC} from "react";
import {motion} from 'framer-motion';

const AddNews:FC = observer(()=>{
    return(
        <motion.form initial={{x:500}} animate={{x:0}} transition={{delay:.4}} className="w-full bg-fuchsia-500 bg-opacity-50 p-2">
            <h1>Добавление новости</h1>
            <div className="flex flex-col gap-5">
            <label className="bg-message p-2 cursor-pointer">
                <span>Добавить файл</span>
                <input type="file" className="hidden"/>
            </label>
            <input type="text" className="outline-none border-b-2 bg-transparent" placeholder="Заголовок"/>
            <textarea className="outline-none bg-transparent border-solid border-white border-2" rows={10} placeholder="Новость"></textarea>
            <div className="flex gap-2">
                <input type="submit" className="cursor-pointer w-full p-2 bg-green-500 rounded-md" value="Добавить"/>
                <input type="submit" className="cursor-pointer w-full p-2 bg-red-500 rounded-md" value="Сброс"/>
            </div>
            </div>
        </motion.form>
    )
});

export default AddNews;