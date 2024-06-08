import React,{FC} from "react";

const Profile:FC = ()=>{
    return(
        <section className="text-white w-full p-2">
            <h1>Профиль</h1>
            <form className="flex flex-col gap-2">
                <input type="text" className="bg-transparent border-b-2 outline-none" placeholder="Имя"/>
                <input type="text" className="bg-transparent border-b-2 outline-none" placeholder="Фамилия"/>
                <input type="text" className="bg-transparent border-b-2 outline-none" placeholder="Логин"/>
                <div className="flex gap-2">
                    <input type="submit" className="w-full bg-green-500 p-2" value="Поменять"/>
                    <input type="button" className="w-full bg-red-500 p-2" value="Сбросить"/>
                </div>
            </form>
        </section>
    );
}
export default Profile;
