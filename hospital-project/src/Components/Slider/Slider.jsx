import React from 'react'

function Slider() {
  return <>
  <div className="hero_area">
    <section class="slider_section ">
        <div class="dot_design">
            <img src="images/dots.png" alt="Photo" />
        </div>
        <div id="customCarousel1" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="container ">
                <div class="row">
                    <div class="col-md-6">
                    <div class="detail-box">
                        <div class="play_btn">
                        <button>
                            <i class="fa fa-play" aria-hidden="true"></i>
                        </button>
                        </div>
                        <h1>
                        Mico <br/>
                        <span>
                            Hospital
                        </span>
                        </h1>
                        <p>
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                        </p>
                        <a href="">
                        Contact Us
                        </a>
                    </div>
                    </div>
                    <div class="col-md-6">
                    <div class="img-box">
                        <img src="images/slider-img.jpg" alt="Photo" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container ">
                <div class="row">
                    <div class="col-md-6">
                    <div class="detail-box">
                        <div class="play_btn">
                        <button>
                            <i class="fa fa-play" aria-hidden="true"></i>
                        </button>
                        </div>
                        <h1>
                        Mico <br/>
                        <span>
                            Hospital
                        </span>
                        </h1>
                        <p>
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                        </p>
                        <a href="">
                        Contact Us
                        </a>
                    </div>
                    </div>
                    <div class="col-md-6">
                    <div class="img-box">
                        <img src="images/slider-img.jpg" alt="Photo" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="carousel-item">
                <div class="container ">
                <div class="row">
                    <div class="col-md-6">
                    <div class="detail-box">
                        <div class="play_btn">
                        <button>
                            <i class="fa fa-play" aria-hidden="true"></i>
                        </button>
                        </div>
                        <h1>
                        Mico <br/>
                        <span>
                            Hospital
                        </span>
                        </h1>
                        <p>
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to
                        </p>
                        <a href="">
                        Contact Us
                        </a>
                    </div>
                    </div>
                    <div class="col-md-6">
                    <div class="img-box">
                        <img src="images/slider-img.jpg" alt="Photo" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="carousel_btn-box">
            <a class="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
                <img src="images/prev.png" alt="Photo" />
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
                <img src="images/next.png" alt="Photo" />
                <span class="sr-only">Next</span>
            </a>
            </div>
        </div>

    </section>
  </div>
  </>
}

export default Slider
