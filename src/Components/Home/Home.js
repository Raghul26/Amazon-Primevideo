import React from 'react';
import "../Home/Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Img from "../Img/image.jpg";
import Img1 from "../Img/image1.1.jpg";
import Img2 from "../Img/image1.2.jpg";
import Img3 from "../Img/image1.3.jpg";
import Img4 from "../Img/image1.4.jpg";
import Img5 from "../Img/image1.5.jpg";
import Img6 from "../Img/image1.6.jpg";
//import Video1 from "../Videos/video.mp4";
import { Autoplay, Navigation, Pagination } from 'swiper';
import Moviecontent from '../Moviecontent/Moviecontent';
import LanguageContent from '../LanguageContent/LanguageContent';
import Moviecontaent3 from '../Moviecontent3/Moviecontent3';
import Movieprime from "../Movieprime/Movieprime";

const Home = () => {
  return (
    <div className='Homemovies'>



      <div className='Movies'>
        <Swiper
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
          className="mySwiper love" >
          <div className='love'>
            <SwiperSlide className='love1'>
              <img src={Img} alt='' />
            </SwiperSlide>
            <SwiperSlide className='love1'>
              <img src={Img1} alt='' />
            </SwiperSlide>
            <SwiperSlide className='love1'>
              <img src={Img2} alt='' />
            </SwiperSlide>
            <SwiperSlide className='love1'>
              <img src={Img3} alt='' />
            </SwiperSlide>
            <SwiperSlide className='love1'>
              <img src={Img4} alt='' />
            </SwiperSlide>
            <SwiperSlide className='love1'>
              <img src={Img5} alt='' />
            </SwiperSlide>
            <SwiperSlide className='love1'>
              <img src={Img6} alt='' />
            </SwiperSlide>
            <SwiperSlide className='love1'>
              <img src={Img1} alt='' />
            </SwiperSlide>
          </div>
        </Swiper>
        <div className='Moviesdata_name'>
          <p>Recommended Movies</p>
        </div>
        <Moviecontent />
        <div className='Movies1'>


          <div className='language_content'>
            <p className='language_movietitle'>Watch In Your Language</p>
            <LanguageContent />
          </div>


          <Moviecontaent3 />
          <div className='Movies2 Movieprime_img'>
            <Movieprime />
          </div>
        </div>


        {/* <div className='jfgiu'>
          <video width="400" height="350" poster={Img4} controls>
            <source src={Video1} type="video/mp4" />
          </video>
        </div> */}

      </div>






    </div>

  )
}

export default Home