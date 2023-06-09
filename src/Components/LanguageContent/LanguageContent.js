import React from "react";
import "../LanguageContent/LanguageContent.css";
import Image2 from "../Img/image2.jpg";
import Image3 from "../Img/image3.jpg";
import Image4 from "../Img/image4.jpg";
import Image5 from "../Img/image5.jpg";
import Image6 from "../Img/image6.jpg";
import Image7 from "../Img/image7.jpg";
import Image8 from "../Img/image8.jpg";
import Image9 from "../Img/image9.jpg";
import Image10 from "../Img/image10.jpg";
import Image11 from "../Img/image11.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../LanguageContent/LanguageContent.css";

export default function App() {
    return (
        <>
            <div className='languageimage'>
                <div className='language_moviecontent'>
                <Swiper
                slidesPerView={3}
                spaceBetween={30}
                className="mySwiper swiper1"
            >
                <SwiperSlide>
                <div className='languageimage_movie1 language_moviecontent1'>
                    <img src={Image6} alt="Hindhi" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='languageimage_movie1 language_moviecontent1'>
                    <img src={Image4} alt="English" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='languageimage_movie1 language_moviecontent1'>
                    <img src={Image3} alt="Telugu" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='languageimage_movie1 language_moviecontent1'>
                    <img src={Image11} alt="Tamil" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='languageimage_movie1 language_moviecontent1'>
                    <img src={Image2} alt="Malayalam" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='languageimage_movie1 language_moviecontent1'>
                    <img src={Image5} alt="Kannada" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='languageimage_movie1 language_moviecontent1'>
                    <img src={Image7} alt="Marathi" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='languageimage_movie1 language_moviecontent1'>
                    <img src={Image8} alt="Punjabi" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='languageimage_movie1 language_moviecontent1'>
                    <img src={Image9} alt="Bengali" />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='languageimage_movie1 language_moviecontent1'>
                    <img src={Image10} alt="Gujarati" />
                </div>
                </SwiperSlide>
            </Swiper>
                </div>
            </div>
        </>
    );
}
