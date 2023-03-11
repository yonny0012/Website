import { CoustomProgrssBar } from './Components/CoustomProgressBar';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Hero } from './Components/Hero';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      
      <CoustomProgrssBar /> 
      <div>
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
