import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../Movieprime/Movieprime.css";
import { Pagination } from "swiper";
import Img1 from "../Img/primeimg1.jpg";
import primeImg2 from "../Img/primeimg2.jpg";
import primeImg3 from "../Img/primeimg3.jpg";
import primeImg4 from "../Img/primeimg4.jpg";
import primeImg5 from "../Img/primeimg5.jpg";
import primevideoImg from "../Img/primevideoImg.jpg";
import Video1 from "../Videos/video.mp4";
import Video2 from "../Videos/video2.mp4";
import Video3 from "../Videos/video3.mp4";
//import Img2 from "../Img/primevideo1.jpg";
import Img3 from "../Img/primevideo2.jpg";
import Img4 from "../Img/primevideo4.jpg";
import Img5 from "../Img/primevideo3.jpg";
import Img6 from "../Img/primevideo5.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faInfo } from '@fortawesome/free-solid-svg-icons';


export default function App() {
    const [primevideo, setprimevideo] = useState(true);
    const [movie2, setmovie2] = useState(false);
    const [movie3, setmovie3] = useState(false);
    const [movie4, setmovie4] = useState(false);
    const [movie5, setmovie5] = useState(false);
    const [movie6, setmovie6] = useState(false);
    const [movie7, setmovie7] = useState(false);
    const [movie8, setmovie8] = useState(false);
    const [movie9, setmovie9] = useState(false);
    const [movie10, setmovie10] = useState(false);

    const movievideo1 = () => {
        setprimevideo(true);
        setmovie2(false);
        setmovie3(false);
        setmovie4(false);
        setmovie5(false);
        setmovie6(false);
        setmovie7(false);
        setmovie8(false);
        setmovie9(false);
        setmovie10(false);
    }

    const movievideo2 = () => {
        setprimevideo(false);
        setmovie2(true);
        setmovie3(false);
        setmovie4(false);
        setmovie5(false);
        setmovie6(false);
        setmovie7(false);
        setmovie8(false);
        setmovie9(false);
        setmovie10(false);
    }

    const movievideo3 = () => {
        setprimevideo(false);
        setmovie2(false);
        setmovie3(true);
        setmovie4(false);
        setmovie5(false);
        setmovie6(false);
        setmovie7(false);
        setmovie8(false);
        setmovie9(false);
        setmovie10(false);
    }

    const movievideo4 = () => {
        setprimevideo(false);
        setmovie2(false);
        setmovie3(false);
        setmovie4(true);
        setmovie5(false);
        setmovie6(false);
        setmovie7(false);
        setmovie8(false);
        setmovie9(false);
        setmovie10(false);
    }

    const movievideo5 = () => {
        setprimevideo(false);
        setmovie2(false);
        setmovie3(false);
        setmovie4(false);
        setmovie5(true);
        setmovie6(false);
        setmovie7(false);
        setmovie8(false);
        setmovie9(false);
        setmovie10(false);
    }

    const movievideo6 = () => {
        setprimevideo(false);
        setmovie2(false);
        setmovie3(false);
        setmovie4(false);
        setmovie5(false);
        setmovie6(true);
        setmovie7(false);
        setmovie8(false);
        setmovie9(false);
        setmovie10(false);
    }


    const movievideo7 = () => {
        setprimevideo(false);
        setmovie2(false);
        setmovie3(false);
        setmovie4(false);
        setmovie5(false);
        setmovie6(false);
        setmovie7(true);
        setmovie8(false);
        setmovie9(false);
        setmovie10(false);
    }


    const movievideo8 = () => {
        setprimevideo(false);
        setmovie2(false);
        setmovie3(false);
        setmovie4(false);
        setmovie5(false);
        setmovie6(false);
        setmovie7(false);
        setmovie8(true);
        setmovie9(false);
        setmovie10(false);
    }


    const movievideo9 = () => {
        setprimevideo(false);
        setmovie2(false);
        setmovie3(false);
        setmovie4(false);
        setmovie5(false);
        setmovie6(false);
        setmovie7(false);
        setmovie8(false);
        setmovie9(true);
        setmovie10(false);
    }


    const movievideo10 = () => {
        setprimevideo(false);
        setmovie2(false);
        setmovie3(false);
        setmovie4(false);
        setmovie5(false);
        setmovie6(false);
        setmovie7(false);
        setmovie8(false);
        setmovie9(false);
        setmovie10(true);
    }
    return (
        <>

            <div>
                {primevideo ? <div className='PrimeVideoContent'>

                    <div className='PrimeVideoContent_Details'>
                        <div className='PrimeVideoContent_Details1'>

                            <div className='PrimeVideoContent_header'>
                                <span className='PrimeVideoContent_span1'>prime</span>
                                <span className='PrimeVideoContent_span2'>Top 10 in India</span>
                            </div>
                            <div className='PrimeVideoContent_moviename'> 
                                <span className='PrimeVideoContent_span2 PrimeVideoContent_moviename_span1'>Mirzapur - Season 2</span>
                                <span className='PrimeVideoContent_span3'>Suspense, Drama, Action <span className='PrimeVideoContent_moviename_contentrating'>A</span></span>
                            </div>
                            <div className='PrimeVideoContentbtn'>
                                <button><FontAwesomeIcon icon={faPlay} /> Play </button><div className='PrimeVideoContentbtn_plush'>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                <div className='PrimeVideoContentbtn_plush'>
                                    <FontAwesomeIcon icon={faInfo} />
                                </div>
                            </div>

                        </div>
                    </div>

                    <video className="PrimeVideoContent_videos" poster={primeImg5} autoPlay='true'>
                        <source src={Video1} type="video/mp4" />
                    </video>

                </div> : null}
            </div>
            <div>
                {movie2 ? <div className='PrimeVideoContent'>

                    <div className='PrimeVideoContent_Details'>
                        <div className='PrimeVideoContent_Details1'>
                        <div className='PrimeVideoContent_header'>
                            <span className='PrimeVideoContent_span1'>prime</span>
                            <span className='PrimeVideoContent_span2'>Top 10 in India</span>
                        </div>
                        <div className='PrimeVideoContent_moviename'>
                            <span className='PrimeVideoContent_span2 PrimeVideoContent_moviename_span1'>K.G.F Chapter 2 (Hindi)</span>
                            <span className='PrimeVideoContent_span3'>Suspense, Action, Drama <span className='PrimeVideoContent_moviename_contentrating'>U/A 13+</span></span>
                        </div>
                        <div className='PrimeVideoContentbtn'>
                            <button><FontAwesomeIcon icon={faPlay} /> Play</button><div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faInfo} />
                            </div>
                        </div>
                        </div>
                    </div>

                    <video className="PrimeVideoContent_videos" poster={Img4} autoPlay='true'>
                        <source src={Video2} type="video/mp4" />
                    </video>

                </div> : null}
            </div>


            <div>
                {
                    movie3 ? <div className='PrimeVideoContent'>

                        <div className='PrimeVideoContent_Details'>
                            <div className='PrimeVideoContent_Details1'>
                            <div className='PrimeVideoContent_header'>
                                <span className='PrimeVideoContent_span1'>prime</span>
                                <span className='PrimeVideoContent_span2'>Top 10 in India</span>
                            </div>
                            <div className='PrimeVideoContent_moviename'>
                                <span className='PrimeVideoContent_moviename_span1'>Jayeshbhai Jordaar</span>
                                <span>Comedy, Drama <span className='PrimeVideoContent_moviename_contentrating'>U/A 13+</span></span>
                            </div>
                            <div className='PrimeVideoContentbtn'>
                                <button><FontAwesomeIcon icon={faPlay} /> Play</button><div className='PrimeVideoContentbtn_plush'>
                                    <FontAwesomeIcon icon={faPlus} />
                                </div>
                                <div className='PrimeVideoContentbtn_plush'>
                                    <FontAwesomeIcon icon={faInfo} />
                                </div>
                            </div>
                            </div>
                        </div>

                        <video className="PrimeVideoContent_videos" poster={Img5} autoPlay='true'>
                            <source src={Video1} type="video/mp4" />
                        </video>

                    </div> : null
                }
            </div>

            <div>
                {movie4 ? <div className='PrimeVideoContent'>

                    <div className='PrimeVideoContent_Details'>
                        <div className='PrimeVideoContent_Details1'>
                        <div className='PrimeVideoContent_header'>
                            <span className='PrimeVideoContent_span1'>prime</span>
                            <span className='PrimeVideoContent_span2'>Top 10 in India</span>
                        </div>
                        <div className='PrimeVideoContent_moviename'>
                            <span className='PrimeVideoContent_moviename_span1'>Suzhal - The Vortex - Season 1</span>
                            <span>Suspense, Drama <span className='PrimeVideoContent_moviename_contentrating'>U/A 16+</span></span>
                        </div>
                        <div className='PrimeVideoContentbtn'>
                            <button><FontAwesomeIcon icon={faPlay} /> Play</button><div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faInfo} />
                            </div>
                        </div>
                        </div>
                    </div>

                    <video className="PrimeVideoContent_videos" poster={Img6} autoPlay='true'>
                        <source src={Video3} type="video/mp4" />
                    </video>

                </div> : null}
            </div>


            <div>
                {movie5 ? <div className='PrimeVideoContent'>

                    <div className='PrimeVideoContent_Details'>
                        <div className='PrimeVideoContent_Details1'>
                        <div className='PrimeVideoContent_header'>
                            <span className='PrimeVideoContent_span1'>prime</span>
                            <span className='PrimeVideoContent_span2'>Top 10 in India</span>
                        </div>
                        <div className='PrimeVideoContent_moviename'>
                            <span className='PrimeVideoContent_moviename_span1'>movie5</span>
                            <span>Comedy, Action, Suspense <span className='PrimeVideoContent_moviename_contentrating'>U/A 13+</span></span>
                        </div>
                        <div className='PrimeVideoContentbtn'>
                            <button><FontAwesomeIcon icon={faPlay} /> Play</button><div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faInfo} />
                            </div>
                        </div>
                        </div>
                    </div>

                    <video className="PrimeVideoContent_videos" poster={Img3} autoPlay='true'>
                        <source src={Video1} type="video/mp4" />
                    </video>

                </div> : null}
            </div>


            <div>
                {movie6 ? <div className='PrimeVideoContent'>

                    <div className='PrimeVideoContent_Details'>
                        <div className='PrimeVideoContent_Details1'>
                        <div className='PrimeVideoContent_header'>
                            <span className='PrimeVideoContent_span1'>prime</span>
                            <span className='PrimeVideoContent_span2'>Top 10 in India</span>
                        </div>
                        <div className='PrimeVideoContent_moviename'>
                            <span className='PrimeVideoContent_moviename_span1'>movie6</span>
                            <span>Comedy, Action, Suspense <span className='PrimeVideoContent_moviename_contentrating'>U/A 13+</span></span>
                        </div>
                        <div className='PrimeVideoContentbtn'>
                            <button><FontAwesomeIcon icon={faPlay} /> Play</button><div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faInfo} />
                            </div>
                        </div>
                        </div>
                    </div>

                    <video className="PrimeVideoContent_videos" poster={Img3} autoPlay='true'>
                        <source src={Video1} type="video/mp4" />
                    </video>

                </div> : null}
            </div>


            <div>
                {movie7 ? <div className='PrimeVideoContent'>

                    <div className='PrimeVideoContent_Details'>
                        <div className='PrimeVideoContent_Details1'>
                        <div className='PrimeVideoContent_header'>
                            <span className='PrimeVideoContent_span1'>prime</span>
                            <span className='PrimeVideoContent_span2'>Top 10 in India</span>
                        </div>
                        <div className='PrimeVideoContent_moviename'>
                            <span className='PrimeVideoContent_moviename_span1'>movie7</span>
                            <span>Comedy, Action, Suspense <span className='PrimeVideoContent_moviename_contentrating'>U/A 13+</span></span>
                        </div>
                        <div className='PrimeVideoContentbtn'>
                            <button><FontAwesomeIcon icon={faPlay} /> Play</button><div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faInfo} />
                            </div>
                        </div>
                        </div>
                    </div>

                    <video className="PrimeVideoContent_videos" poster={Img3} autoPlay='true'>
                        <source src={Video1} type="video/mp4" />
                    </video>

                </div> : null}
            </div>


            <div>
                {movie8 ? <div className='PrimeVideoContent'>

                    <div className='PrimeVideoContent_Details'>
                        <div className='PrimeVideoContent_Details1'>
                        <div className='PrimeVideoContent_header'>
                            <span className='PrimeVideoContent_span1'>prime</span>
                            <span className='PrimeVideoContent_span2'>Top 10 in India</span>
                        </div>
                        <div className='PrimeVideoContent_moviename'>
                            <span className='PrimeVideoContent_moviename_span1'>movie8</span>
                            <span>Comedy, Action, Suspense <span className='PrimeVideoContent_moviename_contentrating'>U/A 13+</span></span>
                        </div>
                        <div className='PrimeVideoContentbtn'>
                            <button><FontAwesomeIcon icon={faPlay} /> Play</button><div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faInfo} />
                            </div>
                        </div>
                        </div>
                    </div>

                    <video className="PrimeVideoContent_videos" poster={Img3} autoPlay='true'>
                        <source src={Video1} type="video/mp4" />
                    </video>

                </div> : null}
            </div>


            <div>
                {movie9 ? <div className='PrimeVideoContent'>

                    <div className='PrimeVideoContent_Details'>
                        <div className='PrimeVideoContent_Details1'>
                        <div className='PrimeVideoContent_header'>
                            <span className='PrimeVideoContent_span1'>prime</span>
                            <span className='PrimeVideoContent_span2'>Top 10 in India</span>
                        </div>
                        <div className='PrimeVideoContent_moviename'>
                            <span className='PrimeVideoContent_moviename_span1'>movie9</span>
                            <span>Comedy, Action, Suspense <span className='PrimeVideoContent_moviename_contentrating'>U/A 13+</span></span>
                        </div>
                        <div className='PrimeVideoContentbtn'>
                            <button><FontAwesomeIcon icon={faPlay} /> Play</button><div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faInfo} />
                            </div>
                        </div>
                        </div>
                    </div>

                    <video className="PrimeVideoContent_videos" poster={Img3} autoPlay='true'>
                        <source src={Video1} type="video/mp4" />
                    </video>

                </div> : null}
            </div>


            <div>
                {movie10 ? <div className='PrimeVideoContent'>

                    <div className='PrimeVideoContent_Details'>
                        <div className='PrimeVideoContent_Details1'>
                        <div className='PrimeVideoContent_header'>
                            <span className='PrimeVideoContent_span1'>prime</span>
                            <span className='PrimeVideoContent_span2'>Top 10 in India</span>
                        </div>
                        <div className='PrimeVideoContent_moviename'>
                            <span className='PrimeVideoContent_moviename_span1'>movie10</span>
                            <span>Comedy, Action, Suspense <span className='PrimeVideoContent_moviename_contentrating'>U/A 13+</span></span>
                        </div>
                        <div className='PrimeVideoContentbtn'>
                            <button><FontAwesomeIcon icon={faPlay} /> Play</button><div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                            <div className='PrimeVideoContentbtn_plush'>
                                <FontAwesomeIcon icon={faInfo} />
                            </div>
                        </div>
                        </div>
                    </div>

                    <video className="PrimeVideoContent_videos" poster={Img3} autoPlay='true'>
                        <source src={Video1} type="video/mp4" />
                    </video>

                </div> : null}
            </div>




            <Swiper
                slidesPerView={2.2}
                spaceBetween={80}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper primevideos"
            >
                <SwiperSlide>
                    <div className='Moviesdata_img1 Movieprime_primeimg Moviecount' onClick={movievideo1}>
                        {
                            primevideo ? <div className='Moviecount Moviecountactive'>
                                <p>1</p>
                                <img src={primevideoImg} alt="" />
                            </div> : <div className='Moviecount'>
                                <p>1</p>
                                <img src={primevideoImg} alt="" />
                            </div>
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Moviesdata_img1 Movieprime_primeimg Moviecount' onClick={movievideo2}>
                        {
                            movie2 ? <div className='Moviecount Moviecountactive'>
                                <p>2</p>
                                <img src={primeImg2} alt="" />
                            </div> : <div className='Moviecount'>
                                <p>2</p>
                                <img src={primeImg2} alt="" />
                            </div>
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Moviesdata_img1 Movieprime_primeimg Moviecount' onClick={movievideo3}>
                        {
                            movie3 ? <div className='Moviecount Moviecountactive'>
                                <p>3</p>
                                <img src={primeImg3} alt="" />
                            </div> : <div className='Moviecount'>
                                <p>3</p>
                                <img src={primeImg3} alt="" />
                            </div>
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Moviesdata_img1 Movieprime_primeimg Moviecount' onClick={movievideo4}>
                        {
                            movie4 ? <div className='Moviecount Moviecountactive'>
                                <p>4</p>
                                <img src={primeImg4} alt="" />
                            </div> : <div className='Moviecount'>
                                <p>4</p>
                                <img src={primeImg4} alt="" />
                            </div>
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Moviesdata_img1 Movieprime_primeimg Moviecount' onClick={movievideo5}>
                        {
                            movie5 ? <div className='Moviecount Moviecountactive'>
                                <p>5</p>
                                <img src={Img1} alt="" />
                            </div> : <div className='Moviecount'>
                                <p>5</p>
                                <img src={Img1} alt="" />
                            </div>
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Moviesdata_img1 Movieprime_primeimg Moviecount' onClick={movievideo6}>
                        {
                            movie6 ? <div className='Moviecount Moviecountactive'>
                                <p>6</p>
                                <img src={Img1} alt="" />
                            </div> : <div className='Moviecount'>
                                <p>6</p>
                                <img src={Img1} alt="" />
                            </div>
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Moviesdata_img1 Movieprime_primeimg Moviecount' onClick={movievideo7}>
                        {
                            movie7 ? <div className='Moviecount Moviecountactive'>
                                <p>7</p>
                                <img src={Img1} alt="" />
                            </div> : <div className='Moviecount'>
                                <p>7</p>
                                <img src={Img1} alt="" />
                            </div>
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Moviesdata_img1 Movieprime_primeimg Moviecount' onClick={movievideo8}>
                        {
                            movie8 ? <div className='Moviecount Moviecountactive'>
                                <p>8</p>
                                <img src={Img1} alt="" />
                            </div> : <div className='Moviecount'>
                                <p>8</p>
                                <img src={Img1} alt="" />
                            </div>
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Moviesdata_img1 Movieprime_primeimg Moviecount' onClick={movievideo9}>
                        {
                            movie9 ? <div className='Moviecount Moviecountactive'>
                                <p>9</p>
                                <img src={Img1} alt="" />
                            </div> : <div className='Moviecount'>
                                <p>9</p>
                                <img src={Img1} alt="" />
                            </div>
                        }
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='Moviesdata_img1 Movieprime_primeimg Moviecount' onClick={movievideo10}>
                        {
                            movie10 ? <div className='Moviecount Moviecountactive'>
                                <p>10</p>
                                <img src={Img1} alt="" />
                            </div> : <div className='Moviecount'>
                                <p>10</p>
                                <img src={Img1} alt="" />
                            </div>
                        }
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}