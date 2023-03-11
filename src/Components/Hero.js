// import avatar from "../Items/img/We.jpg";
import avat from "../Items/img/img2.jpg";
import laptop_Logo from "../Items/img/laptop.svg";
import { TextOcean } from "./TextOcean";
import "../Styles/Hero.css";

export const Hero = ()=>{
  return(
    <section className="hero align-items-strtch">
      <div className="hero-main d-flex flex-column justify-content-center align-items-center">
        <img className="hero-img-main rounded-pill" src={ avat }  width="200" alt="Imagen de Yonny Domínguez" />
        <TextOcean text= "Hola, soy Yonny Domínguez" />
      </div>
      <div className="hero-inferior">
        <img className="hero-img-inf img-fluid" width="150" src={laptop_Logo} alt="Logo_laptop" />
      </div>
    </section>
  )
}