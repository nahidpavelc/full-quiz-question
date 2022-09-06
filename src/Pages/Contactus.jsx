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
              <div class="card-header bg-transparent border-success" style={{ borderBottom: 'none', marginBottom: '35px' }}>
                <div className='d-flex align-items-start'>
                  <div className='text-start me-3 '>
                    <i style={{ color: '#2b4eff' }} class="fa-solid fa-location-dot pe-2y"></i>
                  </div>
                  <div className='text-start'>
                    <p className='mb-0 cont-card-txt mb-1'>New York Office</p>
                    <p className='mb-0 '><a className='cont-card' target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">Maypole Crescent 70-80 Upper <br />
                      St Norwich NR2 1LT</a></p>

                  </div>
                </div>

              </div>

              <div class="card-header bg-transparent border-success" style={{ borderBottom: 'none', marginBottom: '35px' }}>
                <div className='d-flex align-items-start'>
                  <div className='text-start me-3 '>
                    <i style={{ color: '#2b4eff' }} class="fa-solid fa-location-dot pe-2y"></i>
                  </div>
                  <div className='text-start'>
                    <p className='mb-0 cont-card-txt mb-1'>Email us directly</p>
                    <p className='mb-0 '>
                      <a className='cont-card' target="_blank" rel="noreferrer" href="mailto:support@educal.com">support@educal.com</a> <br />
                      <a className='cont-card' target="_blank" rel="noreferrer" href="mailto:info@educal.com">info@educal.com</a>
                    </p>

                  </div>
                </div>

              </div>

              <div class="card-header bg-transparent border-success" style={{ borderBottom: 'none', marginBottom: '35px' }}>
                <div className='d-flex align-items-start'>
                  <div className='text-start me-3 '>
                    <i style={{ color: '#2b4eff' }} class="fa-solid fa-location-dot pe-2y"></i>
                  </div>
                  <div className='text-start'>
                    <p className='mb-0 cont-card-txt mb-1'>New York Office</p>
                    <p className='mb-0 '><a className='cont-card' target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">Maypole Crescent 70-80 Upper <br />
                      St Norwich NR2 1LT</a></p>

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