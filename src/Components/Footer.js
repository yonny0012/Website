import "../Styles/Footer.css";
import { Link } from "react-router-dom";

export const Footer = () =>{
  return(
    <footer className="seccion-oscura d-flex flex-column align-items-center justify-content-center">
      <div className="iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center">
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src="src/img/messenger.svg" alt="messenger" />
        </Link>
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src="src/img/linkedin.svg" alt="linkedin" />
        </Link>
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src="src/img/facebook.svg" alt="facebook" />
        </Link>
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src="src/img/telegram.svg" alt="telegram" />
        </Link>
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src="src/img/twitter.svg" alt="twitter" />
        </Link>
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src="src/img/whatsapp.svg" alt="whatsapp" />
        </Link>
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src="src/img/youtube.svg" alt="youtube" />
        </Link>
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src="src/img/google-play.svg" alt="google-play" />
        </Link>
        <Link href="http://" target="_blank" rel="noopener noreferrer">
          <img className="footer-icono" src="src/img/github.svg" alt="github" />
        </Link>
      </div>
      <p className="footer-texto text-center">
        Aprendo y creo todos los dias. <br />
        Creemos un proyecto juntos.
      </p>
    </footer>
  );
}