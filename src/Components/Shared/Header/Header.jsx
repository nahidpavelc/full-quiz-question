import React from "react";
import { NavLink } from "react-router-dom";
import navLogo from "../../../Assets/img/Logo_Final_Wide.png";
import "./Header.module.css";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light" style={{p:''}}>
        <div class="container-fluid container">
          <a class="navbar-brand" href="#" style={{fontweight:'700'}} >
            <img className="me-2" src={navLogo} alt="" width="auto" height="60" style={{}}/>
            {/* QUIZ */}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <div class="d-flex" role="search">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a>
                    <NavLink className="nav-link" to="/Home">
                      {" "}
                      Home
                    </NavLink>
                  </a>
                </li>

                <li class="nav-item">
                  <a>
                    <NavLink className="nav-link" to="/products">
                      {" "}
                      Quiz
                    </NavLink>
                  </a>
                </li>
                <li class="nav-item">
                  <a>
                    <NavLink className="nav-link" to="/Contactus">
                      {" "}
                      Contact us
                    </NavLink>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
