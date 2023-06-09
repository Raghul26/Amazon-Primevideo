import React,{useState} from 'react'
import Img1 from "../Img/img1.jpg";
import Img2 from "../Img/img2.jpg";
import Img4 from "../Img/img4.jpg";
import Img8 from "../Img/img8.jpg";
//import Img9 from "../Img/img9.jpg";
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

          {/* <p>Recommended Movies</p> */}
          <div className='Moviesdata_img1'>
            <img src={Img1} alt="" onMouseEnter={()=>setshowMovies(true)} />
            {showMovies ? <div className='Moviesdata1' onMouseLeave={()=>setshowMovies(false)}>
              <div>
                <img src={Img1} alt="" />
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
                    <span className='Moviesdata_details_title'>Meppadiyan</span>
                  </div>
                  <div className='Moviesdata_desc'>
                    <span className='Moviesdata_details_desc'>Meppadiyan is a movie that discusses the chronicles in the life of Jayakrishnan, a commoner, portrayed by Unni...</span>
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
            <img src={Img2} alt="" onMouseEnter={()=>setshowMovies(true)} />
            {showMovies ? <div className='Moviesdata1-content2' onMouseLeave={()=>setshowMovies(false)}>
              <div>
                <img src={Img2} alt="" />
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
                    <span className='Moviesdata_details_title'>O Kadhal Kanmani</span>
                  </div>
                  <div className='Moviesdata_desc'>
                    <span className='Moviesdata_details_desc'>Two young lovers are compatible in every way - they even agree that marriage is futile. However, their...</span>
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
            <img src={Img4} alt="" onMouseEnter={()=>setshowMovies(true)} />
            {showMovies ? <div className='Moviesdata1-content3' onMouseLeave={()=>setshowMovies(false)}>
              <div>
                <img src={Img4} alt="" />
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
                    <span className='Moviesdata_details_title'>FIR (Tamil)</span>
                  </div>
                  <div className='Moviesdata_desc'>
                    <span className='Moviesdata_details_desc'>FIR is a thriller story based on the life of a young man named Irfan Ahmed. The narrative captures the story of an...</span>
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
            <img src={Img8} alt="" onMouseEnter={()=>setshowMovies(true)} />
            {showMovies ? <div className='Moviesdata1-content4' onMouseLeave={()=>setshowMovies(false)}>
              <div>
                <img src={Img8} alt="" />
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
                    <span className='Moviesdata_details_title'>Jai Bhim (Tamil)</span>
                  </div>
                  <div className='Moviesdata_desc'>
                    <span className='Moviesdata_details_desc'>A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from...</span>
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
            <img src={Img9} alt="" onMouseEnter={()=>setshowMovies(true)} />
            {showMovies ? <div className='Moviesdata1-content5' onMouseLeave={()=>setshowMovies(false)}>
              <div>
                <img src={Img9} alt="" />
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
                    <span className='Moviesdata_details_title'>Theeran Adhigaaram Ondru</span>
                  </div>
                  <div className='Moviesdata_desc'>
                    <span className='Moviesdata_details_desc'>Theeran, a police officer is entrusted with the task to solve the mystery behind a series of murders and...</span>
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