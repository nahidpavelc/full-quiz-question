import React from 'react';

import '../Styles/Home.css';
import Slide from '../Components/Home/Slide';
import Subjects from './Subjects';
import { Link, Outlet } from 'react-router-dom';
import Subs from '../Components/Subjects/Subs';


const Home = () => {

  return (
    <>
      <div className='' style={{ height: 'auto' }}>
        <Slide />
        <Subs/>
      </div>
    </>
  );
};

export default Home;