import React from 'react';
import { NavLink } from 'react-router-dom';
import Arts from './Arts';

const Courses = () => {
  return (
    <div >
      <div class="btn-group btn-group-lg p-4" role="group" aria-label="Large button group">
        <button type="button" class="btn btn-outline-dark"><a>
                    <NavLink className="nav-link" to="Arts">
                      {" "}
                      Arts
                    </NavLink>
                  </a></button>
        <button type="button" class="btn btn-outline-dark">Commerce</button>
        <button type="button" class="btn btn-outline-dark">Science</button>
      </div>
      <Arts/>
    </div>
  );
};

export default Courses;