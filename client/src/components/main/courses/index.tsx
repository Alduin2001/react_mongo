import React, { FC, useContext, useEffect } from "react";
import { observer } from "mobx-react";
import Course from "./course_item";
import course from './course.jpg';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import AddCourse from "./add_course";
import { StoreContext } from "../../../context/context";
const Courses: FC = observer(() => {
    const rootStore = useContext(StoreContext);
    const {userStore} = rootStore;
    const {courseStore} = rootStore;
    document.title = 'Курсы';
    useEffect(()=>{
        courseStore.getCourses();
    },[]);
    return (
        <section className="w-full text-white flex flex-col items-center gap-2">
            <h1 className="text-2xl">Курсы</h1>
            {userStore.isAuth && <AddCourse/>}
            
            <motion.div initial={{x:-1000}} animate={{x:0}} transition={{duration:1}} className="grid xs:grid-cols-1 s:grid-cols-3 m:grid-cols-5 gap-2 w-4/5 mx-auto">
                {courseStore.courses.map((el:any,i:number)=>(
                    <Link to={`/course_item/${el._id}`}>
                    <Course picture={course} name={el.name} description={el.description} mark={el.averageMark} />
                </Link>
                ))}
            </motion.div>
        </section>
    )
})
export default Courses;

