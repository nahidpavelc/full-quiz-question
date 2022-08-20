import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Aboutus from './Components/Aboutus/Aboutus';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/Aboutus" element={<Aboutus/>} />
        </Routes>

      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
