import React from 'react';
import ContactForm from '../Components/Contactus/ContactForm';
import '../Styles/Cotactus.css'

const Contactus = () => {


  return (
    <div style={{ height: '700px' }}>
      <div className="page-title hosting-bg d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center con-txt">
                Contact Us                   </h1>
              <p className="text-center"></p>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='col-md-6'>
          <ContactForm />
        </div>
        <div className='col-md-6'>

        </div>
      </div>
    </div>
  );
};

export default Contactus;