import { data } from 'jquery';
import React, { useEffect, useState } from 'react';
import './Subs.css';
import SubsCart from './SubsCart';

const Subs = () => {
  const [Subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setSubjects(data.slice(0, 6)) )
  }, [])
  console.log(Subjects);

  return (
    <div>
      <section className="container" id="services">
        <h1 className='pt-4'>Total {Subjects.length} Subjects</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4 p-5">

          {
            Subjects.map(Subject => 
            <SubsCart
              key={Subject.id}
              Subject={Subject}
            ></SubsCart>)
          }
        </div>
      </section >
    </div>
  );
};

export default Subs;