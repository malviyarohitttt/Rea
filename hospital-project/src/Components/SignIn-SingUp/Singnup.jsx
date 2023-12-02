import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Singnup() {
  return <>
  <Header/>
    <section class="book_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col">
          <form>
            <h4>
              Sign <span>Up</span>
            </h4>
            <div class="form-row ">
              <div class="form-group col-lg-4">
                <label for="inputName">Name </label>
                <input type="text" class="form-control" id="inputName" placeholder="Enter Your Name" />
              </div>
              <div class="form-group col-lg-4">
                <label for="inputPhone">Phone Number</label>
                <input type="number" class="form-control" id="inputPhone" placeholder="Enter Your Number" />
              </div>
              <div class="form-group col-lg-4">
                <label for="inputEmail">Email</label>
                <input type="email" class="form-control" id="inputEmail" placeholder="Enter Your Email" />
              </div>
              <div class="form-group col-lg-4">
                <label for="inputPassword">Password</label>
                <input type="password" class="form-control" id="inputPassword" placeholder="Enter Your Password" />
              </div>
            </div>
            <div class="btn-box">
              <button type="submit" class="btn ">Submit Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </>
}

export default Singnup
