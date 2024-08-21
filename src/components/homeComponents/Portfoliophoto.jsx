import { Parallax, Background } from "react-parallax";
import ImageOne from "/src/assets/pap010contrast.jpg";
import "./Portfoliophoto.css";
import { Link } from "react-router-dom";

const Portfoliophoto = () => (
  <Parallax className="photo" strength={700} bgImage={ImageOne}> <Background className="photo1"></Background>
    <div className="content">
      <a className="img-txt" href="/nailCovers">Nails portfolio</a>
    </div>
  </Parallax>
);

export default Portfoliophoto;
