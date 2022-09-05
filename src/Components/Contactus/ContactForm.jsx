import React from 'react';
import '../../Styles/ContactForm.css';

const ContactForm = () => {
  return (
    <div>
      <section>
        <div className='py-4 text-start'>
          <h1>Get In Touch</h1>
          <p>Have a question or just want to say hi? We'd love to hear from you.</p>
        </div>

        <div>
          <form>
            <div className="row mb-2">
              <div className="col">
                <input type="text" className="form-control p-3 con-input" placeholder="First name" required />
              </div>
              <div className="col">
                <input type="text" className="form-control p-3 con-input" placeholder="Last name" required />
              </div>
            </div>

            <input type="email" className="form-control my-2 p-3 con-input" id="exampleFormControlInput1" placeholder="name@example.com" required />
            <input className="form-control my-2 p-3 con-input" type="text" placeholder="Subject" required />
            <textarea className="form-control p-3 con-input" id="exampleFormControlTextarea1" rows="3" placeholder='Enter your Message' required />
            <div class="form-check py-3 text-start">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                I agree to the <strong className='term-txt'>Terms & Conditions</strong>
              </label>
            </div>
          </form>
          <div className='text-start'>
            <button type="button" class="btn btn-primary con-btn">Send your message</button>
          </div>
        </div>
        <div>

        </div>

      </section>
    </div>
  );
};

export default ContactForm;