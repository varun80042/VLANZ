import im from './footer_img.png'

const FootBar = () => (
    <div class="foot_box" style={{ backgroundColor: "rgb(208, 205, 205)" }}>
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <img src={im} style={{ height: "80px", position:"relative", bottom:"40px", left:"10px" }}></img>
    </div>
);

export default FootBar;
