import React, { useEffect, useState } from 'react';
import Qunumber from './Qunumber';
import './Quiz.css';
import { NavLink } from 'react-router-dom';

const Quiz = () => {
  const [Quizes, setQuizes] = useState([]);

  useEffect(() => {
    fetch('Quiz-list.json')
      .then(res => res.json())
      .then(data => setQuizes(data))
  }, []);

  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 40 * 3)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);

  return (
    <div className='' style={{ height: 'Auto' }}>
      <div className="container card my-5" style={{ backgroundColor: '#E6E0CB' }}>
        <div className='container'>
          <div className='card-un p-2'>
            <h1 class="card-title p-4 banner-txt"> <span className="text-success">Biology </span> Exam </h1>
            <div className='d-flex justify-content-between'>
              <div>
                <p className='px-3 mb-0' id="demo" style={{ fontWeight: 700 }}></p>
              </div>
              <div className='text-start'>
                <p className='px-3 mb-0' style={{ fontWeight: 700 }}>Full Marks: 40</p>
                <p className='px-3 mb-0' style={{ fontWeight: 700 }}>Total Questions: {Quizes.length}</p>
              </div>
            </div>
          </div>

          <div class="row row-cols-1 row-cols-md-3 g-4 mt-0" >
            {
              Quizes.map(Quiz => <Qunumber
                key={Quiz.id}
                Quiz={Quiz}
              ></Qunumber>)
            }

          </div>
          <div className='py-4'>
            <NavLink className="nav-link" to="/Subjects">
              {" "}
              <button type="button" class="btn btn-success quiz-button">Finish</button>
            </NavLink>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Quiz;