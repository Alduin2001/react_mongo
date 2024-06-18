import React, { FC } from "react";
import { observer } from "mobx-react";
import star from './star.png';
import {motion} from 'framer-motion';
interface CourseProps {
    picture: string,
    name: string,
    description: string,
    mark: number
}
const Course: FC<CourseProps> = observer(({ picture, name, description, mark }) => {
    return (
        <motion.div whileHover={{scale:1.1,padding:10}} className="bg-purple-600 p-2 w-full">
            <motion.div whileHover={{y:-10, transition:{duration:1}}} className="relative w-full">
                <img src={picture} className="bg-red-600 bg-opacity-50 bg-100 w-full" />
                {mark>0 && (
                    <div className="absolute z-10 right-1 top-1 text-black flex flex-col items-center">
                    <img src={star} className="w-10" />
                    <p>{mark}</p>
                </div>
                )}
            </motion.div>
            <h1>{name}</h1>
            <hr/>
            <p>{description.slice(0,50)}{description.length>50 && (<span>...</span>)}</p>
        </motion.div>
    )
});

export default Course;