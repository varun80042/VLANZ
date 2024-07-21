import logo from './nav_logo.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const SignedNavBar = () => (
    <div class="nav_box">
        <div class = "topnav">
        <Link to="/"><img src={logo} height='60px' style={{position:"fixed", left:"50px", top:"5px" }} /> </Link>
        <Link to="/signin" style={{position:"fixed", right:"60px", top:"-27px",}}><p>Sign Out</p></Link>
        <Link to="/"><img src="https://e7.pngegg.com/pngimages/782/114/png-clipart-profile-icon-circled-user-icon-icons-logos-emojis-users-thumbnail.png" alt="Logo" height='40px' style={{position:"fixed", right:"180px", top:"15px" }} /> </Link>
        <Link to="/checkout"><img src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png" alt="Logo" height='40px' style={{position:"fixed", right:"250px", top:"15px" }} /> </Link>
        </div>
    </div>
);

export default SignedNavBar;