import React, { FC } from "react";
import { observer } from "mobx-react";
import Course from "./course_item";
import course from './course.jpg';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import AddCourse from "./add_course";
const Courses: FC = observer(() => {
    const marks: Array<number> = [4.5, 4.4, 3.5];
    document.title = 'Курсы';
    return (
        <section className="w-full text-white flex flex-col items-center gap-2">
            <h1 className="text-2xl">Курсы</h1>
            <AddCourse/>
            <motion.div initial={{x:-1000}} animate={{x:0}} transition={{duration:1}} className="grid xs:grid-cols-1 s:grid-cols-3 m:grid-cols-5 gap-2 w-4/5 mx-auto">
                <Link to="/course_item/1">
                    <Course picture={course} header="ИБ" body="Это информационная безопасность" mark={marks[0]} />
                </Link>
                <Link to="/course_item/2">
                    <Course picture={course} header="ИБ" body="Это информационная безопасность" mark={marks[1]} />
                </Link>
                <Link to="/course_item/3">
                    <Course picture={course} header="ИБ" body="Это информационная безопасность" mark={marks[1]} />
                </Link>
                <Link to="/course_item/4">
                    <Course picture={course} header="ИБ" body="Это информационная безопасность" mark={marks[1]} />
                </Link>
                <Link to="/course_item/5">
                    <Course picture={course} header="ИБ" body="Это информационная безопасность" mark={marks[1]} />
                </Link>
                <Link to="/course_item/6">
                    <Course picture={course} header="ИБ" body="Это информационная безопасность" mark={marks[1]} />
                </Link>
                <Link to="/course_item/7">
                    <Course picture={course} header="ИБ" body="Это информационная безопасность" mark={marks[1]} />
                </Link>
                <Link to="/course_item/8">
                    <Course picture={course} header="ИБ" body="Это информационная безопасность" mark={marks[0]} />
                </Link>
                <Link to="/course_item/9">
                    <Course picture={course} header="ИБ" body="Это информационная безопасность" mark={marks[2]} />
                </Link>
            </motion.div>
        </section>
    )
})
export default Courses;

