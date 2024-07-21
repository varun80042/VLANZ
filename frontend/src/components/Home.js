import React from 'react';
import './App.css'

import im from './logo.png'
import vid from './bg_vid2.mp4'
import tile1 from './tile1.mp4'
import tile2 from './tile2.mp4'
import tile3 from './tile3.mp4'

import SearchBar from './search_bar';
import WhiteBox from './white_box';
import NavBar from './nav_bar';
import WebBox from './web_box';
import AudBox from './components/aud_box';
import VidBox from './vid_box';
import FeatureBlock from './components/features';
import ProBlock from './pro_version';
import FootBar from './components/foot_bar';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Home extends React.Component {

  render() {
    document.body.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
    return (
      <>
        <video src={vid} type="video/mp4" muted loop id="myVideo" height='700px' autoPlay style={{ position: "absolute" }}></video>

        <NavBar />

        <img src={im} alt="Logo" height='290px' id='im' />

        <SearchBar />

        <br /><br /><br /><br /><br /><br /><br /><br /><br />

        <WhiteBox />

        <div className='tile_choice'>
          <br /><br />
          <p style={{ fontFamily: "Secular One", fontSize: "50px", color: "white", WebkitTextStroke: "1px black", WebkitTextStrokeColor: "black" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Popular professional services</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <a href='#web_div'><video autoPlay loop muted class='tile1' src={tile1} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href='#aud_div'><video autoPlay loop muted class='tile2' src={tile2} /> </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href='#vid_div'><video autoPlay loop muted class='tile3' src={tile3} /> </a>
          <br /><br /><br /><br /><br /><br />
        </div>

        <WhiteBox />

        <FeatureBlock />

        <WhiteBox />

        <ProBlock />

        <WhiteBox />

        <div id='web_div' style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/1567674.jpg")', backgroundRepeat: "no-repeat", height: "100%", width: "100%", backgroundSize: "cover" }}>
          <br /><br />
          <h1 style={{ fontFamily: "Secular One", fontSize: "50px", color: "white", WebkitTextStroke: "1px black" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Web Development</i></h1>
          <Carousel infiniteLoop="true">
            <div>
              <WebBox name="Manish Pandey" desc="I will create the best websites for you using MERN stack." cost="Rs. 1,499" rate="4.5" image="https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Web-Developer.jpg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <WebBox name="Naren Srinivas" desc="I will make responsive webistes using ReactJS and Express." cost="Rs. 990" rate="3" image="https://www.webskittersacademy.in/wp-content/uploads/2015/08/Web-Developer-skill.jpg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <WebBox name="Swathi Kumar" desc="I will do the backend for your website using MongoDB." cost="Rs. 1,299" rate="4" image="https://cdn.columbiauniversitybootcamp.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_01-850x412.jpg" /> <div style={{ height: "50px" }}></div>
            </div>
            <div>
              <WebBox name="Mark Edward" desc="I will design and develop a professional squarespace website." cost="Rs. 1,350" rate="2" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiNmKXqqou33G1KJFnG92U9mNOrIK-qD1ymg&usqp=CAU" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <WebBox name="Manoj Kumar" desc="I will fix wordpress errors and issues in your website." cost="Rs. 799" rate="3.5" image="https://cdn-blog.novoresume.com/articles/web-developer-resume/bg.png" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </Carousel>
          <br/>
        </div>

        <WhiteBox />

        <div id='aud_div' style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/1567674.jpg")', backgroundRepeat: "no-repeat", height: "100%", width: "100%", backgroundSize: "cover" }}>
          <br /><br />
          <h1 style={{ fontFamily: "Secular One", fontSize: "50px", color: "white", WebkitTextStroke: "1px black" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Music and Audio</i></h1>
          <Carousel>
            <div>
              <AudBox name="Ben Robinson" desc="I will clean up, edit, enhance or fix and restore your audio or music." cost="Rs. 1,750" rate="5" image="https://brybed.com/storage/img/681/854/7iyphGK6zayb3r07wWaBoUcgmF0jH0gySFauzdNM.jpeg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <AudBox name="Matt Howard" desc="I will create a professional DJ mix or mashup in any genre." cost="Rs. 900" rate="2.5" image="https://cdn.digitaldjtips.com/app/uploads/2019/05/08101601/fulltime-DJ-main.jpg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <AudBox name="Arun Lal" desc="I will produce accurate guitar transcriptions and create a sheet music." cost="Rs. 799" rate="4"  image="https://rollingstoneindia.com/wp-content/uploads/2018/05/3-1.jpg" /> <div style={{ height: "50px" }}></div>
            </div>
            <div>
              <AudBox name="Joe Gatto" desc="I will produce custom beats based on the genre you choose." cost="Rs. 850" rate="4"  image="https://www.headphonesty.com/wp-content/uploads/2020/08/Singer_Wearing_Headphones_During_Recording_Session-1200x675-cropped.jpg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <AudBox name="Vidant Gupta" desc="I will make relaxing music suitable for meditation." cost="Rs. 1,050" rate="3"  image="https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/fj6xpxemfwbeufoknxrl/create-an-animated-music-video-for-you.png" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </Carousel>
          <br />
        </div>

        <WhiteBox />

        <div id='vid_div' style={{ backgroundImage: 'url("https://wallpaperaccess.com/full/1567674.jpg")', backgroundRepeat: "no-repeat", height: "100%", width: "100%", backgroundSize: "cover" }}>
          <br /><br />
          <h1 style={{ fontFamily: "Secular One", fontSize: "50px", color: "white", WebkitTextStroke: "1px black" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i>Video and Animation</i></h1>
          <Carousel>
            <div>
              <VidBox name="Naman Kulkarni" desc="I will do professional video editing and motion graphics." cost="Rs. 1,999" rate="4"  image="https://www.reliablesoft.net/wp-content/uploads/2022/07/video-editing-courses.webp" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <VidBox name="Piyush Goyal" desc="I will make a professional 3D logo animation for your introductions." cost="Rs. 999" rate="4.5"  image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/22527722/original/d9de303ea2f07efe1e75e1a67f657e33e6aa9b4f.jpg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <VidBox name="Nitin Reddy" desc="I will design any animated GIFs for you in less than 6 hours." cost="Rs. 850" rate="3.5"  image="https://media.wired.com/photos/60dcea818a1e88a03ed5ce04/2:1/w_2399,h_1199,c_limit/Gear-Beef-Up-Video-Editing-PC-1124258613.jpg" /> <div style={{ height: "50px" }}></div>
            </div>
            <div>
              <VidBox name="Mansi Gupta" desc="I will create any type of commercial or corporate video." cost="Rs. 1,299" rate="3.5" image="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2020/01/11201656/Animation-Courses.jpg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <VidBox name="Rajat Sharma" desc="I will make a professional 4K cinematic commercial for your brand." cost="Rs. 2,499" rate="4" image="https://www.hubspot.com/hubfs/how-to-edit-youtube-videos.jpg" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </Carousel>
          <br />
        </div>

        <div style={{ backgroundColor: "rgb(208, 205, 205)", width: "1535px", height: "60px" }}></div>

        <FootBar />
      </>
    );
  }
}

export default Home;
