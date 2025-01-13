import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Support from './components/Support';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      Router - App
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>
      <Routes>
        //Multiple Route
        <Route path='/' element={<Home />}>Single Route</Route>
        <Route path='/support' element={<Support />}>Support</Route>
        <Route path='/about' element={<About />}>About</Route>
        <Route path='/contact' element={<Contact />}>Contact Us</Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
