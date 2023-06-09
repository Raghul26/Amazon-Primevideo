import React,{useState} from 'react';
import "../MovieLogin/MovieLogin.css";
import Img1 from "../Img/amazon.png";
import { Link } from "react-router-dom";

const MovieLogin = () => {

  const [primeacc, setprimeacc] = useState({
    username: ""
  })

  function handelchange(event){
    const {name,value} = event.target;
    setprimeacc((prevstate)=>{
      return{
        ...prevstate,
        [name]:value,
      }
    })
  }


 

  return (
    <>
      <div className='Movielogin_Content_img'>
        <img src={Img1} alt="" />
      </div>
      <div className='Movielogin_Content'>
        <form action='http://localhost:3000/'>
          <div className='Movielogin_Content_title'>
            <p>Create account</p>
          </div>
          <div className='Movielogin_Userinput Movielogin_Userinput1'>
            <div>
              <p>Your name</p>
            </div>
            <input type="text" name='name' value={primeacc.name} autoComplete="off" onChange={handelchange} />
          </div>
          <div className='Movielogin_Userinput'>
            <div>
              <p>Email</p>
            </div>
            <input type="text" name='email' autoComplete="off" />
          </div>
          <div className='Movielogin_Userinput'>
            <div>
              <p>Password</p>
            </div>
            <input type="password" placeholder='Password must be at least 6 character' name='password' autoComplete="off" />
          </div>
          <div className='Movielogin_Userinput'>
            <div>
              <p>Re-enter Password</p>
            </div>
            <input type="password" name='confirmpassword' autoComplete="off" />
          </div>
          <div className='Movielogin_Signinbtn'>
            <button type='submit' typeof='submit' onClick={onsubmit}>Create your Amazon account</button>
          </div>
          <div className='Movielogin_Content_p1'>
            <p>
              By continuing, you agree to Amazon's <br /> <Link to="/condition">Conditions of Use</Link> and <Link to="privacy">Privacy Notice.</Link>
            </p>
          </div>

          <span className='Movielogin_Content_line'></span>

          <div className='Singin_confirm'>
            <p>Already have an account? <Link to="sigin">Sign-In</Link></p>
          </div>
        </form>


        {/* <div className='Movielogin_about'>
          <div className='Movielogin_help'>
            <div>
              <p>Conditions of Use</p>
            </div>
            <div>
              <p>Privacy Notice</p>
            </div>
            <div>
              <p>Help</p>
            </div>
          </div>
          <div className='Movielogin_about2'>
            <p>Amazon.com, Inc. or its affiliates</p>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default MovieLogin