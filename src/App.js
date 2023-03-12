import { CoustomProgrssBar } from './Components/CoustomProgressBar';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Hero } from './Components/Hero';
import { About } from './Components/About';

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar />
        <CoustomProgrssBar height={5} /> 
      </header>
      <Hero />
      <About name="Yonny">
        Actualmente soy estudiane de <strong>Ingeniería en Ciencias Informáticas</strong> en la <a href='www.uci.cu' target={'_blank'}>Universidad de las Ciencias Informáticas</a>
      </About>
    </BrowserRouter>
  );
}

export default App;
