import { observer } from "mobx-react";
import React, {FC} from "react";

const AddUser:FC = observer(()=>{
    return(
        <form className="bg-fuchsia-500 bg-opacity-50 p-2">
            <h1>Форма добавления пользователя</h1>
            <div className="flex flex-col gap-1 ">
                <input type="text" className="bg-transparent border-b-2 outline-none" placeholder="Имя"/>
                <input type="text" className="bg-transparent border-b-2 outline-none" placeholder="Фамилия"/>
                <input type="text" className="bg-transparent border-b-2 outline-none" placeholder="Логин"/>
                <input type="password" className="bg-transparent border-b-2 outline-none" placeholder="Пароль"/>
                <div className="grid grid-cols-2 gap-1">
                    <input type="submit" className="w-full bg-green-500 cursor-pointer" value="Добавить"/>
                    <input type="submit" className="w-full bg-red-500 cursor-pointer" value="Сбросить"/>
                </div>
            </div>
        </form>
    )
});

export default AddUser;