import { observer } from "mobx-react";
import React,{FC} from "react";

const AddExersice:FC = observer(()=>{
    return(
        <form className="p-2 bg-fuchsia-600 bg-opacity-50 flex flex-col gap-2">
            <h1>Форма добавления занятия</h1>
            <div className="flex flex-col gap-2">
            <select className="bg-cyan-600 p-2 rounded-md">
                <option disabled>Выберите тему занятия</option>
                <option>Выберите тему занятия</option>
            </select>
            <label>введите номер занятия:</label>
            <input type="number" className="bg-transparent outline-none border-b-2" min="1"/>
            <input type="text" className="bg-transparent outline-none border-b-2" placeholder="Введите название занятия"/>
            <textarea placeholder="Введите контент" className="bg-transparent outline-none border-solid border-2" rows={10}></textarea>
            <div className="flex gap-2">
                <input type="submit" className="w-full p-2 rounded-md bg-green-500 cursor-pointer" value="Добавить"/>
                <input type="submit" className="w-full p-2 rounded-md bg-red-500 cursor-pointer" value="Сброс"/>
            </div>
            </div>
        </form>
    )
});

export default AddExersice;