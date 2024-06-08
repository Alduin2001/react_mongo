import React, { FC } from "react";
import { useParams } from "react-router-dom";

const CourseItem:FC = ()=>{
    const {id} = useParams();
    return(
        <section className="w-full flex flex-col gap-2 items-center text-white">
            <h1 className="text-2xl">Информация о курсе</h1>
            <p>{id}</p>
        </section>
    )
}

export default CourseItem;