import { CoustomProgrssBar } from './Components/CoustomProgressBar';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Hero } from './Components/Hero';
import { About } from './Components/About';
import { Experience } from './Components/Experience';
import { PrejectSections } from './Components/ProjectSection';

function App() {
  return (
    <BrowserRouter>
      <header className='fixed-top'>
        <NavBar />
        <CoustomProgrssBar height={5} />
      </header>
      <Hero />
      <About name="Yonny">
        <p>
          Actualmente soy estudiante de <strong>Ingeniería en Ciencias 
          Informáticas</strong> en la <a href='www.uci.cu' target={'_blank'}>
          Universidad de las Ciencias Informáticas</a> de Cuba. Curso el 4to año
          de la carrera.
          <br/><br/>
          Actualmente soy estudiante de <strong>Ingeniería en Ciencias 
          Informáticas</strong> en la <a href='www.uci.cu' target={'_blank'}>
          Universidad de las Ciencias Informáticas</a> de Cuba. Curso el 4to año
          de la carrera.
        <br/>
        </p>
      </About>
      <Experience />
      <PrejectSections />
    </BrowserRouter>
  );
}

export default App;
