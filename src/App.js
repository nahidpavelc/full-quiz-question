import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Quiz from './Components/Quiz/Quiz';
import Contactus from './Components/Contactus/Contactus';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import Arts from './Components/Home/Couses/Arts';
import Commerce from './Components/Home/Couses/Commerce';
import Science from './Components/Home/Couses/Science';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Quiz" element={<Quiz />} />
          <Route exact path="/Contactus" element={<Contactus />} />
          <Route exact path="/Signin" element={<Signin />} />
          <Route exact path="/Signup" element={<Signup />} />


          <Route exact path="Courses" element={<Arts />} >
            <Route exact path="Arts" element={<Arts />} />
            <Route exact path="Commerce" element={<Commerce />} />
            <Route exact path="Science" element={<Science />} />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
