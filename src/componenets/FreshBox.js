import React, { useState } from 'react';
import Card from './Card';
import data from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import './FreshBox.scss';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';




const FreshBox = () => {
    let [petdata] = useState(data);
    return (
        <div className='freshboxWrap'>
            <h2>Hello Fresh Box</h2>
            <p>We save you serious time</p>
            <div className="freshslider">
                <Swiper className='freshboxswiper'
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={4}
                    Navigation
                    Pagination={{ type: 'fraction' }}
                    loop={true}
                    autoplay={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <div className="freshList">
                            <Link to="">
                                <div className="imgBox">
                                    <img src={process.env.PUBLIC_URL + './img/img01.jpg'} alt="" />
                                </div>
                                <div className="textBox">
                                    내용
                                </div>
                                <div className="priceBox">
                                    가격
                                </div>
                                <div className="numberBox">
                                    number
                                </div>
                            </Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="freshList">
                        <Link to="">
                            <div className="imgBox">
                                <img src={process.env.PUBLIC_URL + './img/img05.jpg'} alt="" />
                            </div>
                            <div className="textBox">
                                <p>title</p>
                            </div>
                            <div className="priceBox">
                                <p>price</p>
                            </div>
                            <div className="numberBox">
                                <p>number</p>
                            </div>
                        </Link>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="freshList">
                        <Link to="">
                            <div className="imgBox">
                                <img src={process.env.PUBLIC_URL + './img/img03.jpg'} alt="" />
                            </div>
                            <div className="textBox">
                                내용
                            </div>
                            <div className="priceBox">
                                가격
                            </div>
                            <div className="numberBox">
                                number
                            </div>
                        </Link>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="freshList">
                        <Link to="">
                            <div className="imgBox">
                                <img src={process.env.PUBLIC_URL + './img/img04.jpg'} alt="" />
                            </div>
                            <div className="textBox">
                                내용
                            </div>
                            <div className="priceBox">
                                가격
                            </div>
                            <div className="numberBox">
                                number
                            </div>
                        </Link>
                    </div></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default FreshBox;