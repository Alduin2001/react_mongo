import React,{FC} from "react";
import Services from "./slider_services";
import { QRCode } from "react-qrcode";
import {motion} from 'framer-motion';
const Home:FC = ()=>{
    document.title = 'Главная';
    return(
        <motion.section initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1, delay:0.3}} className="text-white flex text-base flex-col gap-2 p-2">
            {/* About us */}
            <div className="w-full flex flex-col">
                <h1>Abouts us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores aperiam delectus porro et expedita nostrum voluptas nemo optio, hic aliquid nulla asperiores laboriosam iusto libero aspernatur cupiditate numquam ad similique.</p>
            </div>
            <div className="grid gap-2 xs:grid-cols-1 s:grid-cols-2 m:grid-cols-4 l:grid-cols-6">
                <div className="bg-purple-500 p-2">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ea inventore nulla asperiores doloribus alias rem perferendis sequi molestiae commodi? Aliquam nihil nostrum impedit repudiandae. Suscipit aspernatur itaque nemo deserunt?</h1>
                </div>
                <div className="bg-purple-500 p-2">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ea inventore nulla asperiores doloribus alias rem perferendis sequi molestiae commodi? Aliquam nihil nostrum impedit repudiandae. Suscipit aspernatur itaque nemo deserunt?</h1>
                </div>
                <div className="bg-purple-500 p-2">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ea inventore nulla asperiores doloribus alias rem perferendis sequi molestiae commodi? Aliquam nihil nostrum impedit repudiandae. Suscipit aspernatur itaque nemo deserunt?</h1>
                </div>
                <div className="bg-purple-500 p-2">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ea inventore nulla asperiores doloribus alias rem perferendis sequi molestiae commodi? Aliquam nihil nostrum impedit repudiandae. Suscipit aspernatur itaque nemo deserunt?</h1>
                </div>
                <div className="bg-purple-500 p-2">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ea inventore nulla asperiores doloribus alias rem perferendis sequi molestiae commodi? Aliquam nihil nostrum impedit repudiandae. Suscipit aspernatur itaque nemo deserunt?</h1>
                </div>
                <div className="bg-purple-500 p-2">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ea inventore nulla asperiores doloribus alias rem perferendis sequi molestiae commodi? Aliquam nihil nostrum impedit repudiandae. Suscipit aspernatur itaque nemo deserunt?</h1>
                </div>
                <div className="bg-purple-500 p-2">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ea inventore nulla asperiores doloribus alias rem perferendis sequi molestiae commodi? Aliquam nihil nostrum impedit repudiandae. Suscipit aspernatur itaque nemo deserunt?</h1>
                </div>
                <div className="bg-purple-500 p-2">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ea inventore nulla asperiores doloribus alias rem perferendis sequi molestiae commodi? Aliquam nihil nostrum impedit repudiandae. Suscipit aspernatur itaque nemo deserunt?</h1>
                </div>
                <div className="bg-purple-500 p-2">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque ea inventore nulla asperiores doloribus alias rem perferendis sequi molestiae commodi? Aliquam nihil nostrum impedit repudiandae. Suscipit aspernatur itaque nemo deserunt?</h1>
                </div>
            </div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:1, transition:{delay:.4}}} className="w-4/5 flex flex-col gap-1 mx-auto">
                <h1>Топ товаров</h1>
            <Services />
            </motion.div>

            <div className="w-4/5 mx-auto">
                <h1>Ссылка на нашего бота</h1>
                <div className="w-full">
                <QRCode value="https://t.me/@jinjas_bot" />
                </div>
            </div>
        </motion.section>
    );
}
export default Home;