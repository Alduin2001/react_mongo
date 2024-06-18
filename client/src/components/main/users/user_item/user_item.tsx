import React, {FC} from "react";

interface UserProps{
    firstname:string,
    lastname:string,
    login:string
}

const UserItem:FC<UserProps> = ({firstname,lastname,login})=>{
    return(
        <form className="w-full flex flex-col gap-2 bg-fuchsia-500 bg-opacity-50 p-2">
            <input type="text" className="bg-transparent outline-none border-b-2" value={firstname} />
            <input type="text" className="bg-transparent outline-none border-b-2" value={lastname} />
            <input type="text" className="bg-transparent outline-none border-b-2" value={login} />
            <div className="flex gap-1">
                <input type="submit" className="outline-none bg-green-500 w-full cursor-pointer" value="Поменять" />
                <input type="submit" className="outline-none bg-red-500 w-full cursor-pointer" value="Удалить" />
            </div>
        </form>
    )
}

export default UserItem;