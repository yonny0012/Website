import ProgressBar from 'react-bootstrap/ProgressBar';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavBar } from './Components/NavBar';
import { Hero } from './Components/Hero';
import { ProgresBar } from './Components/ProgresBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ProgressBar now={10}/> 
      <div>
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
