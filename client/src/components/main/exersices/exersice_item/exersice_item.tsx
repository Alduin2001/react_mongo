import React,{FC} from "react";

import { observer } from "mobx-react";

interface ExersiceProps{
    number:number,
    exersice:string,
    content:string
}

const ExersiceItem:FC<ExersiceProps> = observer(({number,exersice,content})=>{
    return(
        <div className="p-2 bg-fuchsia-500 bg-opacity-50">
            <h1>№ {number} {exersice}</h1>
            <p>{content}</p>
        </div>
    )
});

export default ExersiceItem;