import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../TopContainer/TopContainer.css";
import Img from "../Img/amazon_1.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBars, faMagnifyingGlass, faTv, faClapperboard, faGrip, faBorderAll, faDownload, faCheck, faCaretDown, faGear } from '@fortawesome/free-solid-svg-icons';
import Home from '../Home/Home';


const TopContainer = () => {


  const [openmenus, setopenmenus] = useState(false);
  const openbtn = () => {
    setopenmenus(!openmenus);
  }
  const openmenu = () => {
    setcategories(!categories);
  }
  const [categories, setcategories] = useState(false);


  return (
    <div className='TopContainer'>

      <div className='TopContainer__menus'>



        <div className='TopContainer__open'>

          <div className="TopContainer__openmenu">
            <div className='TopContainer__openbtn'>
              <FontAwesomeIcon icon={faBars} onClick={openbtn} />
            </div>

            <span className='love'></span>


            <div className="TopContainer__icons">
              <div className='TopContainer__icon'>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="menus searchmenu" onClick={openbtn} />
              </div>
              <div className='TopContainer__icon'>
                <FontAwesomeIcon icon={faHouse} className="menu" onClick={openbtn} />
              </div>
              <div className='TopContainer__icon'>
                <FontAwesomeIcon icon={faTv} className="menus" onClick={openbtn} />
              </div>
              <div className='TopContainer__icon'>
                <FontAwesomeIcon icon={faClapperboard} className="menus" onClick={openbtn} />
              </div>
              <div className='TopContainer__icon'>
                <FontAwesomeIcon icon={faGrip} className="menus" onClick={openbtn} />
              </div>
              <div className='TopContainer__icon' onClick={openbtn}>
                <FontAwesomeIcon icon={faBorderAll} className="menus" onClick={openmenu} />
              </div>
              <div className='TopContainer__icon'>
                <FontAwesomeIcon icon={faDownload} className="menus" onClick={openbtn} />
              </div>
              <div className='TopContainer__icon'>
                <FontAwesomeIcon icon={faCheck} className="menus" onClick={openbtn} />
              </div>
              <div className='TopContainer__icon_account'>
                <div className='TopContainer__icon'>
                  <Link to="/login">
                    <FontAwesomeIcon icon={faGear} className="menus" onClick={openbtn} />
                  </Link>
                </div>
              </div>
              <div className='TopContainer__icon'>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={openmenus ? 'active-menu' : 'openbtn'}>
        <div className='openbtn-menu'>
          <div className='menunames-img'>
            <img src={Img} alt="amazon-primeimages" />
          </div>
          <div className='menunames'>
            <input type="text" placeholder='Search' />
          </div>
          <div className='menunames menubtn1 menus menunames-p'>
            <p className="menu">Home</p>
          </div>
          <div className='menunames menubtn2 menus menunames-p'>
            <p>TV Shows</p>
          </div>
          <div className='menunames menubtn3 menus menunames-p'>
            <p>Movies</p>
          </div>
          <div className='menunames menubtn4 menus menunames-p'>
            <p>Channels</p>
          </div>
          <div className='menunames menubtn5 menus menunames-p'>
            <div className="categories-menu">
              <p onClick={openmenu}>Categories</p>
              <FontAwesomeIcon icon={faCaretDown} className={categories ? 'active-menuicon' : 'categoriesmenu'} onClick={openmenu} />
            </div>
            <div className={categories ? 'active-categories-menus' : 'categories-menus'}>
              <p className='categories-heading'>Top Categories</p>
              <div className='categoriesmenu'>
                <p>Included With Prime</p>
                <p>Amazon Origainals</p>
                <p>Movies</p>
                <p>TV</p>
                <p>Kids</p>
                <p>Avalabile to download</p>
                <p>Indian Tv and Movies</p>
              </div>
              <div className='categories-menus1'>
                <p className='categories-heading'>Audio Languages</p>
                <div className='categoriesmenu'>
                  <p>English</p>
                  <p>Hindi</p>
                  <p>Telugu</p>
                  <p>Tamil</p>
                  <p>Kannada</p>
                  <p>Malayalam</p>
                  <p>Bengali</p>
                </div>
              </div>
              <div className='categories-menus3'>
                <p className='categories-heading'>Other Categories</p>
                <div className='categoriesmenu'>
                  <p>Drama</p>
                  <p>Action andadventure</p>
                  <p>Romance</p>
                  <p>Comedy</p>
                  <p>Suspense</p>
                  <p>Horror</p>
                  <p>Award Winners</p>
                </div>
              </div>
            </div>
          </div>
          <div className='menunames menubtn6 menus menunames-p'>
            <p>Downloads</p>
          </div>
          <div className='menunames menubtn7 menus menunames-p'>
            <p>Your Watchlist</p>
          </div>



          {/* <div className='menunames menubtn7 menus menunames-p account-menus'>
            <p>WHO'S WATCHING?</p>
            <p>
          </p>
          </div> */}




        </div>
      </div>
      <Home />
    </div>
  )
}

export default TopContainer