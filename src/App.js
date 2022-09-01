import './App.css';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Quiz from './Components/Quiz/Quiz';
import Science from './Components/Subjects/Science';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Contactus from './Pages/Contactus';
import Arts from './Components/Subjects/Arts';
import Commerce from './Components/Subjects/Commerce';
import Subjects from './Pages/Subjects';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Home" element={<Home />} >
            <Route path="arts" element={<Arts />} />
            <Route path="commerce" element={<Commerce />} />
            <Route path="science" element={<Science />} />
          </Route>

          <Route path="/subjects" element={<Subjects />} >
            <Route path="arts" element={<Arts />} />
            <Route path="commerce" element={<Commerce />} />
            <Route path="science" element={<Science />} />
          </Route>

          {/* <Route path="/courses" element={<Courses />} >
          </Route> */}

          {/* <Route exact path="/quiz" element={<Quiz />} /> */}
          {/* <Route exact path="/Subjects" element ={<Subjects/>}/> */}
          <Route exact path="/contactus" element={<Contactus />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
