import avatar from "../Items/img/We.jpg";
import laptop_Logo from "../Items/img/laptop.svg";
import { TextOcean } from "./TextOcean";
export const Hero = ()=>{
  return(
    <section class="hero align-items-strtch">
      <div class="hero-main d-flex flex-column justify-content-center align-items-center">
        <img class="hero-img-main rounded-pill" src={ avatar }  width="200" alt="I am" />
        <TextOcean text= "Hola, soy la Molécula Jankince" />
      </div>
      <div class="hero-inferior">
        <img class="hero-img-inf img-fluid" width="300" src={laptop_Logo} alt="Logo_laptop" />
      </div>
    </section>
  )
}