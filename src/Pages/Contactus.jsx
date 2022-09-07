import React from 'react';
import ContactCard from '../Components/Contactus/ContactCard';
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
                    <p className='mb-0 cont-card-txt mb-1'>Dhaka Office</p>
                    <p className='mb-0 '><a className='cont-card' target="_blank" rel="noreferrer" href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d185.73305559086714!2d90.3613971432308!3d23.7594845610303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2871fff74d617a66!2sHRSOFT%20Bangladesh!5e1!3m2!1sen!2sbd!4v1662437055732!5m2!1sen!2sbd">
                      P-7 Nurjahan Rd, <br />
                      Dhaka 1207</a></p>

                  </div>
                </div>
              </div>

              <div class="card-header bg-transparent border-success" style={{ borderBottom: 'none', marginBottom: '35px' }}>
                <div className='d-flex align-items-start'>
                  <div className='text-start me-3 '>
                    <i class="fa-solid fa-envelope" style={{ color: '#2b4eff' }}></i>
                  </div>
                  <div className='text-start'>
                    <p className='mb-0 cont-card-txt mb-1'>Email us directly</p>
                    <p className='mb-0 '>
                      <a className='cont-card' target="_blank" rel="noreferrer" href="mailto:info@hrsoftbd.com">info@hrsoftbd.com</a> <br />
                      <a className='cont-card' target="_blank" rel="noreferrer" href="mailto:info@educal.com">info@educal.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div class="card-header bg-transparent border-success" style={{ borderBottom: 'none', marginBottom: '35px' }}>
                <div className='d-flex align-items-start'>
                  <div className='text-start me-3 '>
                    <i class="fa-solid fa-phone" style={{ color: '#2b4eff' }}></i>
                  </div>
                  <div className='text-start'>
                    <p className='mb-0 cont-card-txt mb-1'>Phone</p>
                    <p className='mb-0 '><a className='cont-card' target="" rel="noreferrer" href="tel:+(426)-742-26-44">+(880) 017 2215 8130</a></p>
                  </div>
                </div>
              </div>

              <div class="card-header bg-transparent border-success" style={{ borderBottom: 'none', marginBottom: '35px' }}>
                <div className='d-flex align-items-start'>
                  <div className='text-start me-3 '>
                    <i class="fa-solid fa-thumbs-up" style={{ color: '#2b4eff' }}></i>
                  </div>
                  <div className='text-start'>
                    <div><p className='mb-0 cont-card-txt pb-1'>Follow Us</p></div>
                    <div>
                      <p className='mb-0 d-flex justify-content-start'>
                        <a className='cont-social1' href=""><i class="fa-brands fa-facebook-f cont-social-txt1"></i></a>
                        <a className='cont-social2' href=""><i class="fa-brands fa-twitter cont-social-txt2"></i></a>
                        <a className='cont-social3' href=""><i class="fa-brands fa-pinterest-p cont-social-txt3"></i></a>

                      </p>
                    </div>

                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <ContactCard/>

    </div>
  );
};

export default Contactus;