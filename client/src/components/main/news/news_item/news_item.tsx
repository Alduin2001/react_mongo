import React,{FC} from "react";

interface NewsProps{
    picture:string,
    header:string,
    body:string
}

const NewsItem:FC<NewsProps> = ({picture,header,body})=>{
    return(
        <div className="bg-message p-2 bg-opacity-50 rounded-md">
            <div className="relative">
            <img src={picture} />
            <h1 className="absolute z-10 left-1 top-1 bg-cyan-500 bg-opacity-50 p-2 rounded-md">{header}</h1>
            </div>

            <div>
                <p>{body.slice(0,15)}{body.length > 15 && (<span>...</span>)}</p>
            </div>
        </div>
    )
}

export default NewsItem;