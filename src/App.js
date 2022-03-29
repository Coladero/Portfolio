import { Route, Routes } from 'react-router-dom';
import './css/App.css';
import About from './components/About';
import Skills from './components/Skills'
import MyWork from './components/MyWork';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Routes>
      <Route path='/' element={<About />}/>
      <Route path='/skills' element={<Skills  />}/>
      <Route path='/myWork' element={<MyWork />}/>
    </Routes>
    </div>
  );
}

export default App;
