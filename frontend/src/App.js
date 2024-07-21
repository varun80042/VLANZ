import React from 'react';
import './App.css'
import NavBar from './components/nav_bar.js';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
import Home from "./Home.js";
import Home2 from "./signed_Home.js";
import SignIn from "./sign_in";
import SignUp from "./sign_up";
import Seller from "./components/seller.js";
import Checkout from './checkout';

class App extends React.Component {

  render() {
    return (
      <>
      <Router>      
        <NavBar/>          
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/seller" element={<Seller />}/>
            <Route exact path="/checkout" element={<Checkout />}/>
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;