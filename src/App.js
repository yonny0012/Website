import { CoustomProgrssBar } from './Components/CoustomProgressBar';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Hero } from './Components/Hero';

function App() {
  return (
    <BrowserRouter>
      <div className="fijo">
        <NavBar />
        <CoustomProgrssBar height={5} /> 
      </div>
      <div>
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
