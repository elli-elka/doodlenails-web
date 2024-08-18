import { Parallax, Background } from "react-parallax";
import ImageOne from "../assets/pap010contrast.jpg";
import "./Portfoliophoto.css";

const Portfoliophoto = () => (
  <Parallax className="photo" strength={700} bgImage={ImageOne}> <Background className="photo1"></Background>
    <div className="content">
      <span className="img-txt">Portfolio</span>
    </div>
  </Parallax>
);

export default Portfoliophoto;
