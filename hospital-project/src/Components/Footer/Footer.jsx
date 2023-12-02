import React from 'react'

function Footer() {
  return <>
    <footer class="footer_section">

<section class="info_section ">
  <div class="container">
    <div class="info_top">
      <div class="info_logo">
        <a href="">
          {/* <img src="images/logo.png" alt="Photo" /> */}
          <h3 style={{ color:"rgb(0, 198, 169)",fontSize:"35px",fontWeight:"bolder"}}>Shubh Clinic</h3>

        </a>
      </div>
      <div class="info_form">
        <form action="">
          <input type="email" placeholder="Your email" />
          <button>
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div class="info_bottom layout_padding2">
      <div class="row info_main_row">
        <div class="col-md-6 col-lg-3">
          <h5>
            Address
          </h5>
          <div class="info_contact">
            <a href="">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
            <a href="">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call +01 1234567890
              </span>
            </a>
            <a href="">
              <i class="fa fa-envelope"></i>
              <span>
                demo@gmail.com
              </span>
            </a>
          </div>
          <div class="social_box">
            <a href="">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="info_links">
            <h5>
              Useful link
            </h5>
            <div class="info_links_menu">
              <a class="active" href="index.html">
                Home
              </a>
              <a href="about.html">
                About
              </a>
              <a href="treatment.html">
                Treatment
              </a>
              <a href="doctor.html">
                Doctors
              </a>
              <a href="testimonial.html">
                Testimonial
              </a>
              <a href="contact.html">
                Contact us
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="info_post">
            <h5>
              LATEST POSTS
            </h5>
            <div class="post_box">
              <div class="img-box">
                <img src="images/post1.jpg" alt="Photo" />
              </div>
              <p>
                Normal
                distribution
              </p>
            </div>
            <div class="post_box">
              <div class="img-box">
                <img src="images/post2.jpg" alt="Photo" />
              </div>
              <p>
                Normal
                distribution
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="info_post">
            <h5>
              News
            </h5>
            <div class="post_box">
              <div class="img-box">
                <img src="images/post3.jpg" alt="Photo" />
              </div>
              <p>
                Normal
                distribution
              </p>
            </div>
            <div class="post_box">
              <div class="img-box">
                <img src="images/post4.png" alt="Photo" />
              </div>
              <p>
                Normal
                distribution
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  <div class="container">
    <p>
      &copy; <span id="displayYear"></span> All Rights Reserved By
      <a href="https://html.design/">Free Html Templates</a>
    </p>
  </div>
</footer>
  </>
}

export default Footer
