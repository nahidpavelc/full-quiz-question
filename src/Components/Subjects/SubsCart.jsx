import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './SubsCart.css';

const SubsCart = ({ Sub }) => {
  // const { id, name } = Sub();

  return (
    <>
      <div class="col">
        <div class="card h-100 artsCart cardArts">
          <img src={'https://img.freepik.com/free-vector/teacher-student-concept-illustration_114360-7905.jpg'} class="card-img-top" alt="img" />
          <div class="card-body text-right">
            <h5 class="card-title">Subject</h5>
            <p class="card-text">This is a wider card with supporting </p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <NavLink className="nav-link" to="/Quiz">
              {" "}
              <button type="button" class="btn btn-success art-button">Start</button>
            </NavLink>

            <div>
              <p className='mb-0 artbottom'><i class="fa-solid fa-xmark"></i> Incompleate</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubsCart;