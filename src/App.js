import { CoustomProgrssBar } from './Components/CoustomProgressBar';
import { BrowserRouter, Link } from 'react-router-dom';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Hero } from './Components/Hero';
import { About } from './Components/About';
import { Experience } from './Components/Experience';
import { PrejectSections } from './Components/ProjectSection';
import { Footer } from './Components/Footer';

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
          Informáticas</strong> en la <Link to='http://www.uci.cu' target={'_blank'}><abbr title='Universidad de las Ciencias Informáticas'>
          UCI</abbr></Link> de Cuba. Curso el 4to año
          de la carrera.
        </p>
      </About>
      <Experience />
      <PrejectSections />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
