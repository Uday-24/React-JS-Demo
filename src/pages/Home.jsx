import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './css/Home.css';
const Home = () => {
    return (
        <>
            <div className="container">
                <div className="carousel-container">
                    <Swiper
                        spaceBetween={30}
                        effect={'fade'}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination]}
                        loop={true}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src="/images/placeholder.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/nature1.jpg" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="/images/nature3.jpg" />
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
                <section>
                    <p>
                        This is a brief description section where you can write 5-6 lines about your content.
                        Customize this text to match your requirements.
                        This is a brief description section where you can write 5-6 lines about your content.
                        Customize this text to match your requirements.
                        This is a brief description section where you can write 5-6 lines about your content.
                        Customize this text to match your requirements.
                        This is a brief description section where you can write 5-6 lines about your content.
                        Customize this text to match your requirements.
                        This is a brief description section where you can write 5-6 lines about your content.
                        Customize this text to match your requirements.
                        This is a brief description section where you can write 5-6 lines about your content.
                        Customize this text to match your requirements.
                    </p>
                </section>
            </div>
        </>
    )
}

export default Home
