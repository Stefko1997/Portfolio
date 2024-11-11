import "./works.style.css";
import ItemImg from "../../assets/hool.png";
const Works = () => {
  return (
    <div className="works_holder">
      <h1>WORKS</h1>
      <div className="works_navigation">
        <span>ALL</span>
        <span>LINUX</span>
        <span>HTML & CSS</span>
        <span>REACT JS</span>
        <span>NODE JS</span>
      </div>
      <div className="items_holder">
        <div className="item">
          <img src={ItemImg} />
          <p>Candle</p>
          <p>Creative Candle Light</p>
        </div>
        <div className="item">
          <img src={ItemImg} />
          <p>Candle</p>
          <p>Creative Candle Light</p>
        </div>
        <div className="item">
          <img src={ItemImg} />
          <p>Candle</p>
          <p>Creative Candle Light</p>
        </div>
        <div className="item">
          <img src={ItemImg} />
          <p>Candle</p>
          <p>Creative Candle Light</p>
        </div>
        <div className="item">
          <img src={ItemImg} />
          <p>Candle</p>
          <p>Creative Candle Light</p>
        </div>
        <div className="item">
          <img src={ItemImg} />
          <p>Candle</p>
          <p>Creative Candle Light</p>
        </div>
      </div>
    </div>
  );
};
export default Works;
