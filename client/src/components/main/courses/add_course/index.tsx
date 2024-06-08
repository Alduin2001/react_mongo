import React, { FC } from "react";
import {motion} from 'framer-motion';
const AddCourse: FC = () => {
    return (
        <form className="flex flex-col gap-1 w-4/5 mx-auto bg-purple-500 p-2">
            <h1>Добавить курс</h1>
            <div className="flex flex-col gap-2">
                <motion.input type="text" name="name" className="bg-transparent border-b-2 outline-none" whileFocus={{y:10, transition:{duration:1}}} placeholder="Название"/>
                <div className="flex gap-1">
                    <input type="submit" className="w-full bg-green-500 cursor-pointer" value="Добавить" />
                    <input type="submit" className="w-full bg-red-500 cursor-pointer" value="Очистить" />
                </div>
            </div>
        </form>
    )
}
export default AddCourse;