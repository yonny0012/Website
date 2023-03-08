import code from "../Items/img/code-slash.svg"; 
import { BrowserRouter, Link } from "react-router-dom"; 
export const NavBar = ()=>{
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-Toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-Toggler">
          <Link className="navbar-brand" path="/" to={"/"}>
            <img src={code} width="50" alt="logo de la pagina" />
          </Link>
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" path="/about" to={"/about"}>Sobre mi</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" path="/project" to={"/project"}>Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" path="/" to={"/"}>Testimonios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" path="/contact" to={"/contact"}>Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>      
  );
}