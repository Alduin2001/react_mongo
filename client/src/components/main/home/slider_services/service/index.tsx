import React,{FC} from "react";

interface ServiceProps{
    data:{
        img:string,
        header:string,
        body:string,
        price:string
    }
}
const Service:FC<ServiceProps> = ({data})=>{

    return(
        <div className="w-full">
            <div className="relative">
            <img src={data.img} className="w-full"/>
            <div className="absolute z-10 right-1 top-1 bg-cyan-600 p-1 rounded-lg">
            <p className="line-through">Цена: {data.price+0}</p>
            <p>Цена: {data.price}</p>
            </div>
            </div>
            <div className="bg-cyan-500 p-2">
                <h1>{data.header}</h1>
                <p>{data.body}</p>
            </div>
        </div>
    )
}
export default Service;