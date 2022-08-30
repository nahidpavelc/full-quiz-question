import React, { useEffect, useState } from 'react';
import Qunumber from './Qunumber';
import './Quiz.css';

const Quiz = () => {
  const [Quizes, setQuizes] = useState([]);

  useEffect(() => {
    fetch('Quiz-list.json')
      .then(res => res.json())
      .then(data => setQuizes(data))
  }, []);

  return (
    <div style={{ height: '700px' }}>
      <div className="container">
        <h1 class="card-title  banner-txt mb-1"> <span className="text-success">Biology </span>Quiz Exam </h1>
        <div className='card-title-h1 mb-5 pt-0'></div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          {
            Quizes.map(Quiz => <Qunumber
              key={Quiz.id}
              Quiz={Quiz}
            ></Qunumber>)
          }
        </div>
      </div>
    </div>
  );
};

export default Quiz;