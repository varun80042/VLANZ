import React from 'react';
import './App.css'

import im from './logo.png'
import bg from './sign_bg.jpeg'

import SearchBar from './search_bar';
import WhiteBox from './white_box';
import SignedNavBar from './tools/signed_nav_bar';
import WebBox from './web_box';
import FeatureBlock from './features';
import TileChoiceBlock from './tile_choice';
import ProBlock from './pro_version';
import FootBar from './foot_bar';

function Checkout(props) {
    window.scrollTo(0, 0);
    document.body.style.overflowY = "hidden";
    document.body.style.overflowX = "hidden";
    return (
        <>
            <img src={bg} class="sign_in_bg" style={{ position: "absolute", height: "100%", width: "100%", top:"70px" }} />

            <SignedNavBar />

            <br />

            <h1 style={{color:"black", position:"relative", top:"60px", left:"70px", fontFamily:"Silkscreen", fontSize:"50px"}}>ORDER SUMMARY</h1>

            <div class="checkout_box">

            </div>
        </>
    );
}

export default Checkout;
