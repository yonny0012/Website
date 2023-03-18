import { Link } from "react-router-dom";
import { Project } from "./Project";
import "../Styles/PrejectSections.css" 
import { React ,useState, useEffect } from "react";

export const PrejectSections = () =>{
  const username = 'yonny0012';
  const token = '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';

  const[repo, setRepo] = useState(null);

  useEffect(()=>{
    fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        'Authorization': `token ${token}`
      }
    })
    .then(response => response.json())
    .then(data => setRepo(data));
  },[]);

  return(
    <section id="proyecto" className="proyectos-recientes seccion-clara d-flex flex-column">
      <h2 className="seccion-clara texto-negro">Mis proyectos recientes</h2>
      <h3 className="seccion-descripcion">
        Estos son elgunos proyectos que he creado recientemente
      </h3>
      {/* Galeria de proyecto  */}
      <div className="container text-center proyectos-contenedor">
        {/* Aqui van */}
        <div className="row">
          {
            repo?.map(
              repo => (
                <Project key={repo.id} repo={repo} />
              )
            )
          }
          
        </div>
      </div>
      <Link href="#" target="_blank">
        <button type="button" className="btn btn-info" rel="noopener noreferrer">
          Más proyectos &nbsp;
          <i className="bi bi-arrow-right-circle-fill"></i>
        </button>
      </Link>
    </section>
  );
}