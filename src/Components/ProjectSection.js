import { Link } from "react-router-dom";
import { Project } from "./Project";
import "../Styles/PrejectSections.css" 

export const PrejectSections = () =>{
  return(
    <section id="proyecto" className="proyectos-recientes seccion-clara d-flex flex-column">
      <h2 className="seccion-clara texto-negro">Mis proyectos recientes</h2>
      <h3 className="seccion-descripcion">
        Estos son elgunos proyectos que he creado recientemente
      </h3>
      {/* Galeria de proyecto  */}
      <div className="container text-center proyectos-contenedor">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />

      </div>
      <Link href="#" target="_blank">
        <button type="button" className="btn btn-info" rel="noopener noreferrer">
          Más proyectos
          <i className="bi bi-arrow-right-circle-fill">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
          </i>
        </button>
      </Link>
    </section>
  );
}