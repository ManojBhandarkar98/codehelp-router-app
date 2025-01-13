import { Route, Routes } from 'react-router-dom';
import './App.css';
import Support from './components/Support';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      Router - App
      <Routes>
        //Multiple Route
        <Route path='/' element={<div>Home </div>}>Single Route</Route>
        <Route path='/support' element={<Support/>}>Support</Route>
        <Route path='/about' element={<About />}>About</Route>
        <Route path='/contact' element={<Contact/>}>Contact Us</Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
