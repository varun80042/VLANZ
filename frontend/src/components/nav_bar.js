import logo from './nav_logo.png'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const NavBar = () => (
    <div class="nav_box">
        <div class = "topnav">
        <Link to="/"><img src={logo} alt="Logo" height='60px' style={{position:"fixed", left:"50px", top:"5px" }} /> </Link>
        <Link to="/signup" style={{position:"fixed", right:"80px", top:"-27px",}}><p>Register</p></Link>
        <Link to="/signin" style={{position:"fixed", right:"199px", top:"-27px",}}><p>Sign In</p></Link>
        </div>
    </div>
);

export default NavBar
