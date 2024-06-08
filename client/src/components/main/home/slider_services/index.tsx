import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Service from "./service";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import img from './jason.jpg';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './custom-swiper.css';
const Services: FC = () => {
    return (
        <div className="w-full mx-auto">
            <Swiper spaceBetween={5}
                slidesPerView={3}
                navigation
                pagination={{clickable:true}}
                autoplay={{
                    delay:2000,
                    disableOnInteraction:false
                }}
                modules={[Autoplay, Navigation, Pagination]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide>
                    <Service data={{ img: img, header: 'Заголовок1', body: 'Цитата1' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <Service data={{ img: img, header: 'Заголовок2', body: 'Цитата1' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <Service data={{ img: img, header: 'Заголовок3', body: 'Цитата1' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <Service data={{ img: img, header: 'Заголовок4', body: 'Цитата1' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <Service data={{ img: img, header: 'Заголовок5', body: 'Цитата1' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <Service data={{ img: img, header: 'Заголовок6', body: 'Цитата1' }} />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Services;