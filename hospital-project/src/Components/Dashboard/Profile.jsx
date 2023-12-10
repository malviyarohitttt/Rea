import Footer from "../Footer/Footer";
import Header from "../Header/Header"

function Profile() {

    let currentUser = sessionStorage.getItem("current_user")
    currentUser = JSON.parse(currentUser);
    // console.log(currentUser)

  return <>
  <Header/>
  <section className="book_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col">
          <form>
            <h4>
              Pro<span>file</span>
            </h4>
            <div className="form-row ">
              <div className="form-group col-lg-4">
                <label htmlFor="id">ID</label>
                <input type="email" className="form-control" id="id" placeholder={currentUser.id} readOnly />
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="name">Name</label>
                <input type="password" className="form-control" id="name" placeholder={currentUser.name} readOnly />
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="phonenumber">Phone Number</label>
                <input type="password" className="form-control" id="phonenumber" placeholder={currentUser.phoneNumber} readOnly />
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder={currentUser.email} readOnly />
              </div>
              <div className="form-group col-lg-4">
                <label htmlFor="type">Type</label>
                <input type="email" className="form-control" id="type" placeholder={currentUser.type} readOnly />
              </div>
            </div>
            {/* <div className="btn-box">
              <button className='btn btn-denger' type="submit">Submit Now</button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
  </>
}

export default Profile
