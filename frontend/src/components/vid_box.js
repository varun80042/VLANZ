import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Rating } from 'react-simple-star-rating'

function VidBox(props) {
    return <div class="vid_box">
        <img class="aud_img" src={props.image} />
        <p class='vid_details'>&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style={{ position: "relative", bottom: "22px", right:"18px", fontSize: "22px" }}>{props.name}</b> <br /><br /> 
            <div style={{ position: "relative", bottom: "30px", fontSize: "18px" }}>{props.desc}</div><br /><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <img src="https://static.vecteezy.com/system/resources/previews/007/033/146/original/profile-icon-login-head-icon-vector.jpg" style={{height:"20px", width:"20px", position:"absolute", bottom:"232px", right:"348px", textAlign:"left"}}/>
        
        <hr style={{ position: "relative", bottom: "110px", width: "345px" }} />
        <button style={{ position: "relative", bottom: "115px", left: "131px", backgroundColor: "white", border: "0px", fontFamily: "Secular One", fontSize: "20px" }}>{props.cost}</button>
        <Link to="/signin"><button class="buy_now">🛒 ADD TO CART</button></Link>
        
        <div style={{position:"relative", bottom:"145px", right:"120px"}}>
            <Rating initialValue={props.rate} size="20" allowFraction="true"/>
        </div>
    </div>
}

export default VidBox;