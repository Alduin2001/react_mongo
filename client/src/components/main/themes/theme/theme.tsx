import { observer } from "mobx-react";
import React,{FC} from "react";

interface ThemeProps{
    name:string
}

const Theme:FC<ThemeProps> = observer(({name})=>{
    return(
        <div className="p-2 bg-fuchsia-500 bg-opacity-40">
            <h1>{name}</h1>
        </div>
    )
});

export default Theme;