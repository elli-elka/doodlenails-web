import { Parallax } from "react-parallax";
import ImageThree from "/src/assets/1329239.jpg"
import "./Portfoliophoto.css";

const OtherWorkPhoto = () => (
  <Parallax className="photo" bgImage={ImageThree} strength={200}>
    <div className="content">
    <a className="img-txt" href="/about">About</a>
    </div>
  </Parallax>
);

export default OtherWorkPhoto;
