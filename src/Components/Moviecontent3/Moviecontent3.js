import React,{useState} from 'react'
import Img5 from "../Img/img5.jpg";
import Img6 from "../Img/img6.jpg";
import Img7 from "../Img/img7.jpg";
import "../Home/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus, faBan } from '@fortawesome/free-solid-svg-icons';

const Moviecontaent1 = () => {
  const [showMovies, setshowMovies] = useState(false);
  // const [showmoviedetails, setshowmoviedetails] = useState(false);
  // const showmoviedetail = () => {
  //   setshowmoviedetails(true);
  // }
  // const closemoviedetail = () => {
  //   setshowmoviedetails(false);
  // }
  return (
    <div className='Homemovies_content'>
      <div className='Homemovies_data'>


        <div className='Moviesdata_name Moviesdata_img2'>


          <div className='Moviesdata_img1'>
            <img src={Img5} alt="" onMouseEnter={()=>setshowMovies(true)} />


            { showMovies ?<div className='Moviesdata1' onMouseLeave={()=>setshowMovies(false)}>
              <div>
                <img src={Img5} alt="" />
                <span className='Moviesdata_primevideos'>prime</span>
              </div>
              <p>
                <div className='Moviesdatabtn'>
                  <div className='Moviesdatabtn_btn1'>
                    <span className='Moviesdatabtn_playicon'><FontAwesomeIcon icon={faPlay} /></span>
                    <span>Play</span>
                  </div>
                  <div className='Moviesdatabtn_btn2'>
                    <div className="Moviesdatabtn-tooltip" data-tooltip="Add to Watch later">
                    <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="Moviesdatabtn-tooltip Moviesdatabtn-tooltip-hide" data-tooltip="Hide this Movie">
                    <FontAwesomeIcon icon={faBan}  />
                    </div>
                  </div>
                </div>
                <div className='Moviesdata_details'>
                  <span className='Moviesdata_details_p1'>Included with Prime</span> <br />
                  <div className='Moviesdata_title'>
                    <span className='Moviesdata_details_title'>Gehraiyaan</span>
                  </div>
                  <div className='Moviesdata_desc'>
                    <span className='Moviesdata_details_desc'>Alisha Khanna, 30, ambitious, now finds herself at a crossroads in life. Her six year long relationship has grown monotonous, her caree...</span>
                  </div>
                </div>
                <div>
                </div>
                </p>
            </div> :null }
            
          </div>




          <div className='Moviesdata_img1'>
            <img src={Img6} alt="" onMouseEnter={()=>setshowMovies(true)} />
            {showMovies ? <div className='Moviesdata1-content2' onMouseLeave={()=>setshowMovies(false)}>
              <div>
                <img src={Img6} alt="" />
                <span className='Moviesdata_primevideos-2'>prime</span>
              </div>

              <p>
                <div className='Moviesdatabtn'>
                  <div className='Moviesdatabtn_btn1'>
                    <span className='Moviesdatabtn_playicon'><FontAwesomeIcon icon={faPlay} /></span>
                    <span>Play</span>
                  </div>
                  <div className='Moviesdatabtn_btn2'>
                  <div className="Moviesdatabtn-tooltip" data-tooltip="Add to Watch later">
                    <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="Moviesdatabtn-tooltip Moviesdatabtn-tooltip-hide" data-tooltip="Hide this Movie">
                    <FontAwesomeIcon icon={faBan}  />
                    </div>
                  </div>
                </div>
                <div className='Moviesdata_details'>
                  <span className='Moviesdata_details_p1'>Included with Prime</span> <br />
                  <div className='Moviesdata_title'>
                    <span className='Moviesdata_details_title'>Maatr</span>
                  </div>
                  <div className='Moviesdata_desc'>
                    <span className='Moviesdata_details_desc'>A politician's son and his friends kidnap and sexually assault a school teacher and her daughter. After her daughter...</span>
                  </div>
                </div>
                <div>
                </div>
                </p>

            </div> : null}
          </div>



          <div className='Moviesdata_img1'>
            <img src={Img7} alt="" onMouseEnter={()=>setshowMovies(true)} />
            {showMovies ? <div className='Moviesdata1-content3' onMouseLeave={()=>setshowMovies(false)}>
              <div>
                <img src={Img7} alt="" />
                <span className='Moviesdata_primevideos-3'>prime</span>
              </div>

              <p>
                <div className='Moviesdatabtn'>
                  <div className='Moviesdatabtn_btn1'>
                    <span className='Moviesdatabtn_playicon'><FontAwesomeIcon icon={faPlay} /></span>
                    <span>Play</span>
                  </div>
                  <div className='Moviesdatabtn_btn2'>
                  <div className="Moviesdatabtn-tooltip" data-tooltip="Add to Watch later">
                    <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="Moviesdatabtn-tooltip Moviesdatabtn-tooltip-hide" data-tooltip="Hide this Movie">
                    <FontAwesomeIcon icon={faBan}  />
                    </div>
                  </div>
                </div>
                <div className='Moviesdata_details'>
                  <span className='Moviesdata_details_p1'>Included with Prime</span> <br />
                  <div className='Moviesdata_title'>
                    <span className='Moviesdata_details_title'>New York</span>
                  </div>
                  <div className='Moviesdata_desc'>
                    <span className='Moviesdata_details_desc'>NEW YORK is a contemporary story of 3 young friends (John Abraham, Katrina Kaif and Neil Nitin Mukesh) set agains...</span>
                  </div>
                </div>
                <div>
                </div>
                </p>

            </div> : null}
          </div>











          {/* <div className='Moviesdata_img1'>
            <img src={Img1} alt="" />
          </div>
          <div className='Moviesdata_img1'>
            <img src={Img1} alt="" />
          </div>
          <div className='Moviesdata_img1'>
            <img src={Img1} alt="" />
          </div>
          <div className='Moviesdata_img1'>
            <img src={Img1} alt="" />
          </div>
          <div className='Moviesdata_img1'>
            <img src={Img1} alt="" />
          </div>
          <div className='Moviesdata_img1'>
            <img src={Img1} alt="" />
          </div> */}



































        </div>
      </div>
    </div>
  )
}

export default Moviecontaent1