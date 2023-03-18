import "../Styles/Project.css";
import img1 from "../Items/img/img1.jpg";
import { Link } from "react-router-dom";
export const Project=({ repo })=>{
  return(
    <div className="col-12 col-md-6 col-lg-4">
      <div className="proyecto">
        <img className="img" src={img1} alt="proyecto 1" />
        <div className="overlay">
          <p>{repo.name}</p>
          <div className="iconos-contenedor">
            <Link to={repo.html_url} target="_blank" rel="noopener noreferrer">
              {/* gtihub icon */}
              <i className="bi bi-github"></i>
            </Link>
            <Link href={repo.url} target="_blank" rel="noopener noreferrer"> 
              {/* laptop icon  */}
              <i className="bi bi-laptop"></i>
            </Link>
          </div>
          <i className="bi bi-info-circle"></i>
        </div>
      </div>
    </div>
  );
}