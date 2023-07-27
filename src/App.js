import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './Pages/Home';
import Footer from './components/Footer';
import About from './Pages/About';
import Classes from './Pages/Classes';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header className='heading'/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/classes' element={<Classes />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
