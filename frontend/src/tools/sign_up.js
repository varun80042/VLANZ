import React from 'react';
import './App.css'

import im from './logo.png'
import bg from './sign_bg.jpeg'

import SearchBar from './search_bar';
import WhiteBox from './white_box';
import NavBar from './nav_bar';
import WebBox from './web_box';
import FeatureBlock from './features';
import TileChoiceBlock from './tile_choice';
import ProBlock from './pro_version';
import FootBar from './foot_bar';

function SignUp() {
  window.scrollTo(0, 0);
  document.body.style.overflowY = "hidden";
  document.body.style.overflowX = "hidden";

  return (
    <>

      <img src={bg} class="sign_up_bg" style={{ position: "absolute", top: "70px", height: "100%", width: "100%" }} />

      <NavBar />
      <br />

      {/* <img src={im} alt="Logo" height='350px' style={{ position: "relative", top: "120px", left: "200px" }} /> */}
      <p>
        <span className="search_text" style={{ position: "relative", top: "70px", left: "70px", fontFamily: "Silkscreen", color: "darkblue" }}>Sign Up</span>
      </p>

      <p class="signIn">Sign In</p>

      <div class="sign_up_box">
        <form>
          <label for="firstname" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>First Name</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" id="firstname" name="firstname" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} /><br /><br />

          <label for="lastname" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Last Name</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" id="lastname" name="lastname" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} /><br /><br />

          <label for="username" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Username</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="text" id="username" name="username" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} /><br /><br />

          <label for="age" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Age</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="number" id="age" name="age" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} /><br /><br />

          <label for="email" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Email</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="email" id="email" name="email" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} /><br /><br />


          <label for="password" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Password</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="password" id="password" name="password" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "250px", height: "15px" }} /><br /><br />

          <button type="submit" id="search_button" style={{ top: "6px", left: "170px", fontSize: "16px", height: "60px", width: "110px", padding: "10px", fontFamily: "Silkscreen", fontWeight: "bold" }}>Register</button>

        </form>
      </div>
    </>
  );
}

export default SignUp;
