import { observer } from "mobx-react";
import React,{FC} from "react";

const AddTheme:FC = observer(()=>{
    return(
        <form>
            <h1>Форма добавления</h1>
            <div className="flex flex-col gap-2">
            <select className="outline-none p-2 bg-fuchsia-400 bg-opacity-30">
                <option disabled>Выберите курс</option>
                <option>Выберите курс</option>
                <option>Выберите курс</option>
            </select>
            <input type="text" className="outline-none bg-transparent border-b-2" placeholder="Название темы"/>
            <div className="flex gap-2">
                <input type="submit" className="w-full p-2 rounded-md bg-green-500 cursor-pointer" value="Добавить тему"/>
                <input type="submit" className="w-full p-2 rounded-md bg-red-500 cursor-pointer" value="Сброс"/>
            </div>
            </div>
        </form>
    )
});

export default AddTheme;