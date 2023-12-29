import { Parallax } from "react-parallax";
import ImageThree from "../assets/1329239.jpg"
import "./Portfoliophoto.css";

const OtherWorkPhoto = () => (
  <Parallax className="photo" bgImage={ImageThree} strength={200}>
    <div className="content">
      <span className="img-txt">Bookings</span>
    </div>
  </Parallax>
);

export default OtherWorkPhoto;
