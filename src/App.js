import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Home from './Pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header className='heading'/>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
