import { Parallax } from "react-parallax";
import ImageTwo from "../assets/image_2023-10-22_15-46-05.png";
import "./Portfoliophoto.css";

const Portfoliophoto = () => (
  <Parallax className="photo" bgImage={ImageTwo} strength={200}>
    <div className="content">
      <span className="img-txt">Editorials</span>
    </div>
  </Parallax>
);

export default Portfoliophoto;
