import React from 'react';
import ContactForm from '../Components/Contactus/ContactForm';
import '../Styles/Cotactus.css'

const Contactus = () => {


  return (
    <div style={{ height: 'auto' }}>

      <div className="page-title hosting-bg d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center con-txt">Contact Us</h1>
              <p className="text-center"></p>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5'>
        <div className='row row-cols-1 row-cols-md-6 g-6'>
          <div className='col-md-6 sm-12 md-6 lg-6'>
            <ContactForm />
          </div>

          <div className='col-md-6 d-flex justify-content-center sm-12 md-6 lg-6'>
            <div class="card border-success mb-3 card_info-inner" style={{ maxWidth: 'auto' }}>
              <div class="card-header bg-transparent border-success" style={{borderBottom:'none'}}>
                <div className='d-flex align-items-start'>
                  <div className='text-start'>
                    <i style={{color:'#2b4eff'}} class="fa-solid fa-location-dot pe-2y"></i>
                  </div>
                  <div className='text-start'> 
                    <p>New York Office</p>
                    <p>Maypole Crescent 70-80 Upper</p>
                    <p>St Norwich NR2 1LT</p>
                  </div>
                </div>

              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;