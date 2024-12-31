import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './css/Home.css';
const Home = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <>
            <div className="container">
                <div className="carousel-container">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        onAutoplayTimeLeft={onAutoplayTimeLeft}
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
                        <div className="autoplay-progress" slot="container-end">
                            <svg viewBox="0 0 48 48" ref={progressCircle}>
                                <circle cx="24" cy="24" r="20" stroke="currentColor" fill="none"></circle>
                            </svg>
                            <span ref={progressContent}></span>
                        </div>
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
