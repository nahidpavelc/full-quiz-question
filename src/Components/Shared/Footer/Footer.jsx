import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div class="">

        {/* <footer class="text-white text-center text-lg-start" style="background-color: #23242a;"> */}
        <footer class="text-white text-center text-lg-start" style={{ backgroundColor: '#23242a' }}>
          {/* <!-- Grid container --> */}
          <div class="container p-4">
            {/* <!--Grid row--> */}
            <div class="row mt-4">
              {/* <!--Grid column--> */}
              <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
                <div className='fo-head mb-3'>
                  <h5 class="text-uppercase" >About us</h5>
                </div>

                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti.
                </p>

                <p>
                  Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                  molestias.
                </p>

                <div class="mt-4 d-flex ">
                  {/* <!-- Facebook --> */}
                  <li className='li-st'><a type="button" class="fo-button1 btn btn-floating btn-warning btn-lg ms-1"><i class="fa-brands fa-square-facebook"></i></a></li>

                  {/* <!-- Twitter --> */}
                  <li className='li-st'><a type="button" class="fo-button1 btn btn-floating btn-warning btn-lg ms-1"><i class="fa-brands fa-square-twitter"></i></a></li>

                  {/* <!-- Linkedin --> */}
                  <li className='li-st'><a type="button" class="fo-button1 btn btn-floating btn-warning btn-lg ms-1"><i class="fa-brands fa-linkedin"></i></a></li>
                  

                </div>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <div className='fo-head mb-3'>
                  <h5 class="text-uppercase">Contact us</h5>
                </div>

                <div class="form-outline form-white ">
                  {/* <input type="text" id="formControlLg" class="form-control form-control-lg"/> */}
                  <div class="form-notch"><div class="form-notch-leading" style={{ width: '9px' }} ></div><div class="form-notch-middle" style={{ width: '48.8px' }}  ></div><div class="form-notch-trailing"></div></div></div>

                {/* <ul class="fa-ul" style="margin-left: 1.65em;"> */}
                <ul class="fa-ul" style={{ marginLeft: '1.65em' }}>
                  <li class="mb-3">
                    <span class="fa-li"><i class="fa-solid fa-location-dot"></i></span><span class="ms-2">New York, NY 10012, US</span>
                  </li>
                  <li class="mb-3">
                    <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">info@example.com</span>
                  </li>
                  <li class="mb-3">
                    <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+ 01 234 567 88</span>
                  </li>
                  <li class="mb-3">
                    <span class="fa-li"><i class="fas fa-print"></i></span><span class="ms-2">+ 01 234 567 89</span>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                <div className='fo-head mb-3'>
                  <h5 class="text-uppercase">Opening hours</h5>
                </div>

                <table class="table text-center text-white">
                  <tbody class="font-weight-normal">
                    <tr>
                      <td>Sat - Wed</td>
                      <td>9:00am - 5:30pm</td>
                    </tr>
                    <tr>
                      <td>Thu</td>
                      <td>9:00am - 2:00am</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div class="text-center p-3" style={{ backgroundColor: ' rgba(0, 0, 0, 0.2)' }}>
            © 2020 |
            <a class="text-white" style={{ textDecoration: 'none' }} href="http://hrsoftbd.com/"> hrsoftbd.com</a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>

      </div>
    </>
  );
};

export default Footer;