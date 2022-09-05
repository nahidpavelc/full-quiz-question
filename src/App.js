import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Quiz from './Components/Quiz/Quiz';
import Contactus from './Pages/Contactus';
import Subjects from './Pages/Subjects';
import SignIn from './Components/Shared/SignIn/SignIn';
import Signup from './Components/Shared/SignUp/Signup';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route exact path="/Contactus" element={<Contactus />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup" element={<Signup />} />

          <Route exact path="/Quiz" element={<Quiz/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
