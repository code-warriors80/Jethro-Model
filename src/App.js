import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// PAGE COMPONENTS
import Header from './components/header';
import Footer from './components/Footer';

// PAGES
import Home from './Pages/Home';
import About from './Pages/About';
import Classes from './Pages/Classes';
import Gallery from './Pages/Gallery';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header className='heading'/>

          <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/classes' element={<Classes />}></Route>
              <Route path='/gallery' element={<Gallery />}></Route>
          </Routes>

          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
