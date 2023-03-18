import "../Styles/About.css";
export const About = (props)=>{
  return (
    <section id="sobre-mi" className="sobre-mi">
      <div className="contenedor">
        <h2 className="seccion-titulo texto-blanco">Conoce a {props.name}</h2>
        <p className="seccion-texto"> {props.children} </p>
      </div>
    </section>
  );
}