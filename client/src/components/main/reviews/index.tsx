import React, { FC } from "react";
import { observer } from "mobx-react";
import ReviewItem from "./review_item";
import { motion } from 'framer-motion';

const Reviews: FC = observer(() => {
    return (
        <section className="text-white flex flex-col gap-1 p-2 w-full">
            <h1>Отзывы</h1>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.4,duration:1}} className="flex flex-col gap-2">
                <ReviewItem name="Yuri" review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex maxime alias perspiciatis! Perspiciatis numquam incidunt odit necessitatibus quae nesciunt beatae dolores temporibus. Fugit earum aspernatur sapiente ipsa numquam adipisci aut!" />
                <ReviewItem name="Yuri" review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex maxime alias perspiciatis! Perspiciatis numquam incidunt odit necessitatibus quae nesciunt beatae dolores temporibus. Fugit earum aspernatur sapiente ipsa numquam adipisci aut!" />
                <ReviewItem name="Yuri" review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex maxime alias perspiciatis! Perspiciatis numquam incidunt odit necessitatibus quae nesciunt beatae dolores temporibus. Fugit earum aspernatur sapiente ipsa numquam adipisci aut!" />
                <ReviewItem name="Yuri" review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex maxime alias perspiciatis! Perspiciatis numquam incidunt odit necessitatibus quae nesciunt beatae dolores temporibus. Fugit earum aspernatur sapiente ipsa numquam adipisci aut!" />
                <ReviewItem name="Yuri" review="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex maxime alias perspiciatis! Perspiciatis numquam incidunt odit necessitatibus quae nesciunt beatae dolores temporibus. Fugit earum aspernatur sapiente ipsa numquam adipisci aut!" />
            </motion.div>
        </section>
    )
});

export default Reviews;