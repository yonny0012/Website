import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { NavBar } from './Components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
