import React from 'react'
import { Link }  from 'react-router-dom'


function Header() {
  return <>
  <div className="hero_area">
      <header class="header_section">
      {/* <div class="header_top">
        <div class="container">
          <div class="contact_nav">
            <a href="">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call : +01 123455678990
              </span>
            </a>
            <a href="">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>
                Email : demo@gmail.com
              </span>
            </a>
            <a href="">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
          </div>
        </div>
      </div> */}
      <div class="header_bottom">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <Link class="navbar-brand" to='/' >
              {/* <img src="images/logo.png" alt="Photo" /> */}
              <h3 style={{ color:"rgb(0, 198, 169)",fontSize:"35px",fontWeight:"bolder"}}>Shubh Clinic</h3>
            </Link>


            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="d-flex mr-auto flex-column flex-lg-row align-items-center">
                <ul class="navbar-nav  ">
                  <li class="nav-item active">
                    <Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span></Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to='/about'> About</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to='/treatment'>Treat      ment</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to='/doctor'>Doctors</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to='/contact'>Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div class="quote_btn-container">
                <Link to='/signin'>
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <span>
                    SignIn
                  </span>
                </Link>
                <Link to='/signup'>
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <span>
                    SignUp
                  </span>
                </Link>
                <form class="form-inline">
                  <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    </div>
  </>
}

export default Header
