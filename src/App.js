import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Quiz from './Components/Quiz/Quiz';
import Contactus from './Components/Contactus/Contactus';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/Home" element={<Home/>} />
          <Route exact path="/Quiz" element={<Quiz/>} />
          <Route exact path="/Contactus" element={<Contactus/>} />
          <Route exact path="/Signin" element={<Signin/>} />
          <Route exact path="/Signup" element={<Signup/>} />
          
        </Routes>

      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
