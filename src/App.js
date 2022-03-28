import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills'
import Project from './pages/Project';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/skills' element={<Skills  />}/>
      <Route path='/project' element={<Project />}/>
    </Routes>
    </div>
  );
}

export default App;
