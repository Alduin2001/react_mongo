import { observer } from "mobx-react";
import React, {FC} from "react";

interface ReviewProps{
    name:string,
    review:string
}

const ReviewItem:FC<ReviewProps> = observer(({name,review})=>{
    return(
        <div className="flex flex-col gap-1 indent-5 p-2 bg-success rounded-2xl">
            <h1>{name}</h1>
            <hr/>
            <p>{review}</p>
        </div>
    )
})

export default ReviewItem;