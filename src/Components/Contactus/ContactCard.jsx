import React from 'react';
import '../../Styles/ContactCard.css';
import knowleg from '../../Assets/img/Knowledge.png';
import support from '../../Assets/img/support.png';

const ContactCard = () => {
  return (
    <div style={{ backgroundColor: '#EDEEF3' }}>
      <div className='container p-5' >
        <div className="row row-cols-1 row-cols-md-2 g-4">

          <div className="col">
            <div className="card card-cont">
              <img className='card-cont-img' src={knowleg}  alt="" />
              <div className="card-body">
                <h5 className="card-title card-title-cont" >Knowledge Base</h5>
                <p className="card-text ca" style={{ marginBottom: '30px' }}>My good sir plastered cuppa barney cobblers mush argy bargy ruddy.</p>
              </div>
              <div>
                <button type="button" class="btn btn-primary card-cont-btn">Visit Documentation</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-cont">
              <img className='card-cont-img' src={support} style={{ width: '70px' }} alt="" />
              <div className="card-body">
                <h5 className="card-title card-title-cont" >Online Support</h5>
                <p className="card-text ca" style={{ marginBottom: '30px' }}>My good sir plastered cuppa barney cobblers mush argy bargy ruddy.</p>
              </div>
              <div>
                <button type="button" class="btn btn-primary card-cont-btn">Send a ticket</button>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </div>

  );
};

export default ContactCard;