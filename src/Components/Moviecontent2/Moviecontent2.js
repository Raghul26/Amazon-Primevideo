import React,{useState} from 'react'
//import Img15 from "../Img/img15.jpg";
import Img10 from "../Img/img10.jpg";
import Img12 from "../Img/img12.jpg";
import Img13 from "../Img/img13.jpg";
import Img14 from "../Img/img14.jpg";
import "../Home/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus, faBan } from '@fortawesome/free-solid-svg-icons';

const Moviecontaent1 = () => {
  const [showMovies, setshowMovies] = useState(false);
  return (
    <div className='Homemovies_content Homemovies_content2'>
        <div className='Homemovies_data'>
          <div className='Moviesdata'>






          <div className='Moviesdata_img1 Moviesdata_img2'>
            <img src={Img12} alt="" onMouseEnter={()=>setshowMovies(true)}  />
            {showMovies ? <div className='Moviesdata1-content6' onMouseLeave={()=>setshowMovies(false)}>
              <div>
                <img src={Img12} alt="" className='movie6' />
                <span className='Moviesdata_primevideos-6'>prime</span>
              </div>
              <p>
                <div className='Moviesdatabtn'>
                  <div className='Moviesdatabtn_btn1'>
                    <span className='Moviesdatabtn_playicon'><FontAwesomeIcon icon={faPlay} /></span>
                    <span>Play</span>
                  </div>
                  <div className='Moviesdatabtn_btn2'>
                  <div className="Moviesdatabtn-tooltip2" data-tooltip="Add to Watch later">
                    <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="Moviesdatabtn-tooltip2 Moviesdatabtn-tooltip-hide2" data-tooltip="Hide this Movie">
                    <FontAwesomeIcon icon={faBan}  />
                    </div>
                  </div>
                </div>
                <div className='Moviesdata_details'>
                  <span className='Moviesdata_details_p1'>Included with Prime</span> <br />
                  <div className='Moviesdata_title'>
                    <span className='Moviesdata_details_title'>Hara Hara Mahadevaki</span>
                  </div>
                  <div className='Moviesdata_desc'>
                    <span className='Moviesdata_details_desc'>A politician orders two indepentant goons to plant a bag with a ticking bomb. A rackteer has a bag full of fake...</span>
                  </div>
                  <div className='Moviesdata_desc2'>
                    <span>2 hr 2 min</span>
                  </div>
                </div>
                <div>
                </div>
                </p>
            </div> : null}



            
          </div>



          <div className='Moviesdata_img1'>
            <img src={Img13} alt="" onMouseEnter={()=>setshowMovies(true)} />
            {showMovies ? <div className='Moviesdata1-content7' onMouseLeave={()=>setshowMovies(false)}>
              <div>
                <img src={Img13} alt="" className='movie6' />
                <span className='Moviesdata_primevideos-7'>prime</span>
              </div>
              <p>
                <div className='Moviesdatabtn'>
                  <div className='Moviesdatabtn_btn1'>
                    <span className='Moviesdatabtn_playicon'><FontAwesomeIcon icon={faPlay} /></span>
                    <span>Play</span>
                  </div>
                  <div className='Moviesdatabtn_btn2'>
                  <div className="Moviesdatabtn-tooltip2" data-tooltip="Add to Watch later">
                    <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="Moviesdatabtn-tooltip2 Moviesdatabtn-tooltip-hide2" data-tooltip="Hide this Movie">
                    <FontAwesomeIcon icon={faBan}  />
                    </div>
                  </div>
                </div>
                <div className='Moviesdata_details'>
                  <span className='Moviesdata_details_p1'>Included with Prime</span> <br />
                  <div className='Moviesdata_title'>
                    <span className='Moviesdata_details_title'>Kayamai Kadakka</span>
                  </div>
                  <div className='Moviesdata_desc'>
                    <span className='Moviesdata_details_desc'>Two men, who know each other only through Facebook, share two things in common: their name and their opinion...</span>
                  </div>
                  <div className='Moviesdata_desc2'>
                    <span>2 hr 2 min</span>
                  </div>
                </div>
                <div>
                </div>
                </p>
            </div> : null}
          </div>







          <div className='Moviesdata_img1'>
            <img src={Img14} alt="" onMouseEnter={()=>setshowMovies(true)} />
            {showMovies ? <div className='Moviesdata1-content8' onMouseLeave={()=>setshowMovies(false)}>
              <div>
                <img src={Img14} alt="" className='movie6' />
                <span className='Moviesdata_primevideos-8'>prime</span>
              </div>
              <p>
                <div className='Moviesdatabtn'>
                  <div className='Moviesdatabtn_btn1'>
                    <span className='Moviesdatabtn_playicon'><FontAwesomeIcon icon={faPlay} /></span>
                    <span>Play</span>
                  </div>
                  <div className='Moviesdatabtn_btn2'>
                  <div className="Moviesdatabtn-tooltip2" data-tooltip="Add to Watch later">
                    <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="Moviesdatabtn-tooltip2 Moviesdatabtn-tooltip-hide2" data-tooltip="Hide this Movie">
                    <FontAwesomeIcon icon={faBan}  />
                    </div>
                  </div>
                </div>
                <div className='Moviesdata_details'>
                  <span className='Moviesdata_details_p1'>Included with Prime</span> <br />
                  <div className='Moviesdata_title'>
                    <span className='Moviesdata_details_title'>Naradan</span>
                  </div>
                  <div className='Moviesdata_desc'>
                    <span className='Moviesdata_details_desc'>Naradan is a dramatic journey of Chandraprakash, a popular news anchor in the media world who is desperate t...</span>
                  </div>
                  <div className='Moviesdata_desc2'>
                    <span>2 hr 2 min</span>
                  </div>
                </div>
                <div>
                </div>
                </p>
            </div> : null}
          </div>




          <div className='Moviesdata_img1'>
            <img src={Img10} alt="" onMouseEnter={()=>setshowMovies(true)} />
            {showMovies ? <div className='Moviesdata1-content9' onMouseLeave={()=>setshowMovies(false)}>
              <div>
                <img src={Img10} alt="" className='movie6' />
                <span className='Moviesdata_primevideos-9'>prime</span>
              </div>
              <p>
                <div className='Moviesdatabtn'>
                  <div className='Moviesdatabtn_btn1'>
                    <span className='Moviesdatabtn_playicon'><FontAwesomeIcon icon={faPlay} /></span>
                    <span>Play</span>
                  </div>
                  <div className='Moviesdatabtn_btn2'>
                  <div className="Moviesdatabtn-tooltip2" data-tooltip="Add to Watch later">
                    <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="Moviesdatabtn-tooltip2 Moviesdatabtn-tooltip-hide2" data-tooltip="Hide this Movie">
                    <FontAwesomeIcon icon={faBan}  />
                    </div>
                  </div>
                </div>
                <div className='Moviesdata_details'>
                  <span className='Moviesdata_details_p1'>Included with Prime</span> <br />
                  <div className='Moviesdata_title'>
                    <span className='Moviesdata_details_title'>David</span>
                  </div>
                  <div className='Moviesdata_desc'>
                    <span className='Moviesdata_details_desc'>Two Davids living in different parts of India and coping up with their own problems in life, finally meet each othh, a popular news anchor in the media world who is desperate t...</span>
                  </div>
                  <div className='Moviesdata_desc2'>
                    <span>2 hr 2 min</span>
                  </div>
                </div>
                <div>
                </div>
                </p>
            </div> : null}
          </div>


          {/* <div className='Moviesdata_img1'>
            <img src={Img15} alt="" onMouseEnter={()=>setshowMovies(true)} />
            {showMovies ? <div className='Moviesdata1-content9' onMouseLeave={()=>setshowMovies(false)}>
              <div>
                <img src={Img15} alt="" className='movie6' />
                <span className='Moviesdata_primevideos-9'>prime</span>
              </div>
              <p>
                <div className='Moviesdatabtn'>
                  <div className='Moviesdatabtn_btn1'>
                    <span className='Moviesdatabtn_playicon'><FontAwesomeIcon icon={faPlay} /></span>
                    <span>Play</span>
                  </div>
                  <div className='Moviesdatabtn_btn2'>
                  <div className="Moviesdatabtn-tooltip2" data-tooltip="Add to Watch later">
                    <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="Moviesdatabtn-tooltip2 Moviesdatabtn-tooltip-hide2" data-tooltip="Hide this Movie">
                    <FontAwesomeIcon icon={faBan}  />
                    </div>
                  </div>
                </div>
                <div className='Moviesdata_details'>
                  <span className='Moviesdata_details_p1'>Included with Prime</span> <br />
                  <div className='Moviesdata_title'>
                    <span className='Moviesdata_details_title'>David</span>
                  </div>
                  <div className='Moviesdata_desc'>
                    <span className='Moviesdata_details_desc'>Two Davids living in different parts of India and coping up with their own problems in life, finally meet each othh, a popular news anchor in the media world who is desperate t...</span>
                  </div>
                  <div className='Moviesdata_desc2'>
                    <span>2 hr 2 min</span>
                  </div>
                </div>
                <div>
                </div>
                </p>
            </div> : null}
          </div> */}



          </div>
        </div>
    </div>
  )
}

export default Moviecontaent1