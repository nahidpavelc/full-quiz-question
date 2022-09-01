import React from 'react';

import '../Styles/Home.css';
import Slide from '../Components/Home/Slide';
import Subjects from './Subjects';
import { Link, Outlet } from 'react-router-dom';


const Home = () => {

  return (
    <>
      <div className='' style={{ height: '700px' }}>
        <Slide />
        <div className="courses-nav">
          <Link to="/Home/arts"> Arts </Link >
          <Link to="/Home/commerce"> Commerce </Link >
          <Link to="/Home/science"> Science </Link >
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Home;