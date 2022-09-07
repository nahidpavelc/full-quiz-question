import React from 'react';
import './Topbar.css'

const Topbar = () => {
  return (
    <section className='d-flex justify-content-center px-5'>
      <div className='container Topbar d-flex justify-content-between '>
        <div className='d-flex align-items-center'>
          <p className='mb-0' style={{font:'bold'}}>Subjects</p>
        </div>

        <div className='d-flex justify-content-between align-items-center'>
          <p className='mb-0 mx-2'>Show:</p>
          <div className=' '>
            <select name="languages" id="lang" style={{width:'80px'}}>
              <option value="javascript">25</option>
              <option value="php">50</option>
              <option value="java">75</option>
              <option value="golang">100</option>
              
            </select>
          </div>
          <p className='mb-0 mx-2'>Sorted By:</p>
          <div className=' '>
            <select name="languages" id="lang" style={{width:'80px'}}>
              <option value="Default">Default</option>
              <option value="Price">Price (Low > High)</option>
              <option value="java">Price (High > Low)</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;