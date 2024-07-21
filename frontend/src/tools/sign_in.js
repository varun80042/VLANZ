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

function SignIn() {
  window.scrollTo(0, 0);
  document.body.style.overflowY = "hidden";
  document.body.style.overflowX = "hidden";
  return (
    <>
      <img src={bg} class="sign_in_bg" style={{ position: "absolute", top: "70px", height: "100%", width: "100%" }} />

      <NavBar />
      <br />
      <p>
        <span className="search_text" style={{ position: "relative", top: "110px", left: "70px", fontFamily: "Silkscreen", color: "darkblue" }}>Sign In</span>
      </p>

      <p class="signIn">Sign In</p>

      <div class="sign_in_box">
        <form>
          <label for="email" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Username</label><br />
          <input type="text" id="email" name="email" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "330px", height: "25px" }} /><br /><br /><br />

          <label for="password" style={{ fontFamily: "Silkscreen", fontSize: "25px", fontWeight: "bold" }}>Password</label><br />
          <input type="password" id="password" name="password" style={{ fontSize: "15px", padding: "2%", border: "2px solid black", borderRadius: "5px", width: "330px", height: "25px" }} /><br />

          <button type="submit" id="search_button" style={{ top: "35px", left: "125px", fontSize: "16px", height: "60px", width: "100px", padding: "10px", fontFamily: "Silkscreen", fontWeight: "bold" }}>Submit</button>

        </form>
      </div>
    </>
  );
}

export default SignIn;
