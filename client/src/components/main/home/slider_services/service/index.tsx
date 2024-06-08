import React,{FC} from "react";

interface ServiceProps{
    data:{
        img:string,
        header:string,
        body:string
    }
}
const Service:FC<ServiceProps> = ({data})=>{

    return(
        <div className="w-full">
            <img src={data.img} className="w-full"/>
            <div className="bg-cyan-500 p-2">
                <h1>{data.header}</h1>
                <p>{data.body}</p>
            </div>
        </div>
    )
}
export default Service;