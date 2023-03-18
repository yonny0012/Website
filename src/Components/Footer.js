import "../Styles/Footer.css";
import { Link } from "react-router-dom";
import messenger from "../Items/img/messenger.svg";
import linkedin from "../Items/img/linkedin.svg";
import facebook from "../Items/img/facebook.svg";
import telegram from "../Items/img/telegram.svg";
import twitter from "../Items/img/twitter.svg";
import whatsapp from "../Items/img/whatsapp.svg";
import github from "../Items/img/github.svg";
// import messenger from "../Items/img/messenger.svg";


export const Footer = () =>{
  return(
    <footer className="d-flex flex-column align-items-center justify-content-center">
      <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src={ messenger } alt="messenger" />
        </Link>
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src={ linkedin } alt="linkedin" />
        </Link>
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src={ facebook } alt="facebook" />
        </Link>
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src={ telegram } alt="telegram" />
        </Link>
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src={ twitter } alt="twitter" />
        </Link>
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src={ whatsapp } alt="whatsapp" />
        </Link>
        
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src={ github } alt="github" />
        </Link>
      </div>
      <p className="footer-texto text-center">
        Aprendo y creo. <br />
        Creemos un proyecto juntos.
      </p>
    </footer>
  );
}