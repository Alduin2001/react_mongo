import React, { FC } from "react";
import { observer } from "mobx-react";
import star from './star.png';
import {motion} from 'framer-motion';
interface CourseProps {
    picture: string,
    header: string,
    body: string,
    mark: number
}
const Course: FC<CourseProps> = observer(({ picture, header, body, mark }) => {
    return (
        <motion.div whileHover={{scale:1.1,padding:10}} className="bg-purple-600 p-2">
            <motion.div whileHover={{y:-10, transition:{duration:1}}} className="relative w-full">
                <img src={picture} className="bg-red-600 bg-opacity-50 bg-100 w-full" />
                <div className="absolute z-10 right-1 top-1 text-black flex flex-col items-center">
                    <img src={star} className="w-10" />
                    <p>{mark}</p>
                </div>
            </motion.div>
            <h1>{header}</h1>
            <p>{body}</p>
        </motion.div>
    )
});

export default Course;