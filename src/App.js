import { Link, Route, Routes } from 'react-router-dom';
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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
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
