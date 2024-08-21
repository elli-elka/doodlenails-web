import { Parallax } from "react-parallax";
import ImageTwo from "/src/assets/image_2023-10-22_15-46-05.png";
import "./Portfoliophoto.css";

const Portfoliophoto = () => (
  <Parallax className="photo" bgImage={ImageTwo} strength={400}>
    <div className="content">
    <a className="img-txt" href="/bookings">Bookings</a>
    </div>
  </Parallax>
);

export default Portfoliophoto;
