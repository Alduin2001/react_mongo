import { observer } from "mobx-react";
import React,{FC} from "react";
import AddTheme from "./add_themes/add_themes";
import Theme from "./theme/theme";
import {motion} from 'framer-motion';

document.title = 'Темы';
const Themes:FC = observer(()=>{
    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.6}} className="flex flex-col gap-2 w-full p-2">
            <h1 className="text-2xl">Темы</h1>
            <AddTheme/>
            <div className="w-full flex flex-col gap-2">
                <Theme name="Тема1. Введение в техносферную безопасность"/>
                <Theme name="Тема1. Введение в техносферную безопасность"/>
                <Theme name="Тема1. Введение в техносферную безопасность"/>
                <Theme name="Тема1. Введение в техносферную безопасность"/>
                <Theme name="Тема1. Введение в техносферную безопасность"/>
            </div>
        </motion.section>
    )
});

export default Themes;