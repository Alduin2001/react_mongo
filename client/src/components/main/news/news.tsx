import { observer } from "mobx-react";
import React,{FC, useContext} from "react";
import AddNews from "./add_news/add_news";
import NewsItem from "./news_item/news_item";
import {motion} from 'framer-motion';
import { StoreContext } from "../../../context/context";
document.title = 'Новости';
const News:FC = observer(()=>{
    const rootStore = useContext(StoreContext);
    const {userStore} = rootStore;

    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.8}} className="flex flex-col gap-1 w-full p-2">
            <h1 className="text-2xl">Новости</h1>
            {
                userStore.role == 'Модератор' && (
                    <AddNews/>
                )
            }
            <motion.div initial={{x:-500}} animate={{x:0}} transition={{delay:.6}} className="grid grid-cols-1 gap-2 s:grid-cols-2 m:grid-cols-3">
                <NewsItem picture="https://www.imgacademy.com/sites/default/files/img-academy-housing-hero.jpg" header="Header" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab quae inventore earum impedit sit officiis! Nisi debitis asperiores, dolor vero at, blanditiis quos necessitatibus veritatis animi non qui ad."/>
                <NewsItem picture="https://www.imgacademy.com/sites/default/files/img-academy-housing-hero.jpg" header="Header" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab quae inventore earum impedit sit officiis! Nisi debitis asperiores, dolor vero at, blanditiis quos necessitatibus veritatis animi non qui ad."/>
                <NewsItem picture="https://www.imgacademy.com/sites/default/files/img-academy-housing-hero.jpg" header="Header" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab quae inventore earum impedit sit officiis! Nisi debitis asperiores, dolor vero at, blanditiis quos necessitatibus veritatis animi non qui ad."/>
                <NewsItem picture="https://www.imgacademy.com/sites/default/files/img-academy-housing-hero.jpg" header="Header" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab quae inventore earum impedit sit officiis! Nisi debitis asperiores, dolor vero at, blanditiis quos necessitatibus veritatis animi non qui ad."/>
                <NewsItem picture="https://www.imgacademy.com/sites/default/files/img-academy-housing-hero.jpg" header="Header" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab quae inventore earum impedit sit officiis! Nisi debitis asperiores, dolor vero at, blanditiis quos necessitatibus veritatis animi non qui ad."/>
                <NewsItem picture="https://www.imgacademy.com/sites/default/files/img-academy-housing-hero.jpg" header="Header" body="Lorem ipsum"/>
            </motion.div>
        </motion.section>
    )
});

export default News;