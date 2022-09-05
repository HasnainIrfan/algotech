import React from 'react';
import './testimonial.css';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";
import { useContext } from 'react';
import { themeContest } from '../../Contest';

const Testimonial = (props) => {
    const theme = useContext(themeContest);
    const darkMode = theme.state.darkMode;
    return (
        <div className={"bg " + (darkMode ? 'bgDark' : '')} >
            <motion.div className="testimonial-wrapper"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.5, type: 'linear', stiffness: 200 }}
            >
                <div className={"testimonial " + (darkMode ? 'darktestimonial' : '')} >
                    <h1 style={{ color: props.color }}>testimonial</h1>

                    <div className="testimonialSwiper">
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={"auto"}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 2,
                                slideShadows: true,
                            }}
                            pagination={true}
                            modules={[EffectCoverflow, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="test">
                                    <div className="testimg"></div>
                                    <div className="testtitle">
                                        <h1>Johnny Sing</h1>
                                    </div>
                                    <div className="testdec">
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur
                                            adipisicing elit. At tempora cum doloribus?
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="test test1">
                                    <div className="testimg"></div>
                                    <div className="testtitle">
                                        <h1>Johnny Sing</h1>
                                    </div>
                                    <div className="testdec">
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur
                                            adipisicing elit. At tempora cum doloribus?
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="test ">
                                    <div className="testimg"></div>
                                    <div className="testtitle">
                                        <h1>Johnny Sing</h1>
                                    </div>
                                    <div className="testdec">
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur
                                            adipisicing elit. At tempora cum doloribus?
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="test test1">
                                    <div className="testimg"></div>
                                    <div className="testtitle">
                                        <h1>Johnny Sing</h1>
                                    </div>
                                    <div className="testdec">
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur
                                            adipisicing elit. At tempora cum doloribus?
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt='' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt='' />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Testimonial