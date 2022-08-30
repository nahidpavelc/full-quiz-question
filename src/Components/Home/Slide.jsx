import React from 'react';
import { NavLink } from 'react-router-dom';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slide.css";

SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

const Slide = () => {
  return (
    <div>
      <div className="App">
        {/* <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2> */}

        <>
          <Swiper
            loop={true}
            // autoplay={{ delay: 3000 }}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg bg1 d-flex align-items-center justify-content-center">
                <div>
                  <h1 className='Slide-txt'>Your Online Quiz</h1>
                  {/* <p style={{width:'370px', }}>Lorem ipsum, dolor sit amet consectetur.</p> */}
                  <a>
                    <NavLink className="nav-link" to="/Quiz">
                      {" "}
                      <button type="button" class="btn btn-success">Start</button>
                    </NavLink>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg bg2 d-flex align-items-center justify-content-center">
                <div>
                  <h1 className='Slide-txt'>Your Online Quiz</h1>
                  <a>
                    <NavLink className="nav-link" to="/Quiz">
                      {" "}
                      <button type="button" class="btn btn-success">Start</button>
                    </NavLink>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg bg3 d-flex align-items-center justify-content-center">
                <div>
                  <h1 className='Slide-txt'>Your Online Quiz</h1>
                  <a>
                    <NavLink className="nav-link" to="/Quiz">
                      {" "}
                      <button type="button" class="btn btn-success">Start</button>
                    </NavLink>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default Slide;