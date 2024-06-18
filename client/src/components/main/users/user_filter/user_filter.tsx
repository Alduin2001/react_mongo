import React, {FC} from "react";
import { observer } from "mobx-react";
import {motion} from 'framer-motion';
const UserFilter:FC = observer(()=>{
    return(
        <motion.form initial={{x:-1000}} animate={{x:0}} transition={{duration:1}} className="w-full bg-fuchsia-500 bg-opacity-50 flex flex-col gap-1 p-2">
            <div className="flex flex-col gap-2">
                <h1>Поиск по дате регистрации</h1>
                <label className="flex gap-2">
                    <p>С:</p>
                    <input type="date" className="outline-none bg-transparent"/>
                </label>
                <label className="flex gap-2">
                    <p>По:</p>
                    <input type="date" className="outline-none bg-transparent" max={Date.now()}/>
                </label>
            </div>
            <hr/>
            <div>
                <h1>Поиск по имени или фамилию</h1>
                <input type="text" className="bg-transparent border-b-2 w-full outline-none" placeholder="Имя или фамилия"/>
            </div>
            <div className="w-full grid grid-cols-2 gap-1">
                <input type="submit" className="w-full outline-none bg-green-500 cursor-pointer" value="Поиск"/>
                <input type="submit" className="w-full outline-none bg-red-500 cursor-pointer" value="Сброс"/>
            </div>
        </motion.form>
    )
});

export default UserFilter;