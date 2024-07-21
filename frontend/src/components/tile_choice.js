import tile1 from './tile1.mp4'
import tile2 from './tile2.mp4'
import tile3 from './tile3.mp4'

const TileChoiceBlock = () => (
  <div className='tile_choice'>
    <br /><br />
    <p style={{ fontFamily: "Secular One", fontSize: "50px", color: "white", WebkitTextStroke: "1px black", WebkitTextStrokeColor: "black" }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Popular professional services</p>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <a href='http://localhost:3000/'><video autoPlay loop muted class='tile1' src={tile1} /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href='http://localhost:3000/'><video autoPlay loop muted class='tile2' src={tile2} /> </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href='http://localhost:3000/'><video autoPlay loop muted class='tile3' src={tile3} /> </a>
    <br /><br /><br /><br /><br /><br />
  </div>
);

export default TileChoiceBlock;