import "../Styles/Project.css";
import img1 from "../Items/img/img1.jpg";
import { Link } from "react-router-dom";
export const Project=()=>{
  return(
    <div className="row">
      <div className="col-12 col-md-6 col-lg-4">
        <div className="proyecto">
          <img className="img" src={img1} alt="proyecto 1" />
          <div className="overlay">
            <p>Proyecto 1</p>
            <div className="iconos-contenedor">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                {/* gtihub icon */}
                <i className="bi bi-github">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                </i>
              </Link>
              <Link href="src/test/index_test.html" target="_blank" rel="noopener noreferrer"> 
                {/* laptop icon  */}
                <i className="bi bi-laptop">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
                  </svg>
                </i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>      
  );
}