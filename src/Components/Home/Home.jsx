import { Button } from 'bootstrap';
import React from 'react';
import { ProgressBar } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Courses from './Couses/Courses';
import './Home.css';
import Slide from './Slide';


const Home = () => {

  return (
    <div className='' style={{ height: '700px' }}>
      <Slide/>
      <Courses/>
    </div>
  );
};

export default Home;