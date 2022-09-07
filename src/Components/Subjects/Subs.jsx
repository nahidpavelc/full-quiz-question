import { data } from 'jquery';
import React, { useEffect, useState } from 'react';
import Topbar from '../Shared/Topbar/Topbar';
import './Subs.css';
import SubsCart from './SubsCart';

const Subs = () => {
  const [Subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setSubjects(data.slice(0, 6)))
  }, [])
  console.log(Subjects);

  return (
    <div>
      <div className="page-title hosting-bg d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center con-txt">Total {Subjects.length} Subjects</h1>
              <p className="text-center"></p>
            </div>
          </div>
        </div>
      </div>
      {/* {Subjects.length == 0 ? {}:{}} */}
      <section className="container" id="services">
      <Topbar/>
        <div class="row row-cols-1 row-cols-md-3 g-4 px-5 py-3">

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