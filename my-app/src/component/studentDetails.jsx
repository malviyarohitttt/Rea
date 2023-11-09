import React, { Component } from 'react'

export default class studentDetails extends Component {

  constructor(){
    super()
    let data = [
      {
        sname: "Rohit",
        email: "rohitmalviya2324@gmail.com",
        age: 20,
        mobile: 9669264151,
        branch: "CSE"
      },
      {
        sname: "rahul",
        email: "rahultmalviya2324@gmail.com",
        age: 21,
        mobile: 8978458789,
        branch: "IT"
      },
    ];

    this.state={
      studentDetails:data
    }
  }

  addStudent= ()=>{
    let sname = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let age = document.querySelector("#age").value;
    let mobile = document.querySelector("#mobile").value;
    let branch = document.querySelector("#branch").value;

    if ( sname.length < 1 && email.length < 1 && age.length < 1 && mobile.length < 1) {
      window.alert("Please Fill All The Details");
    } else {
      {
        this.state.studentDetails.map((element) => {
          if (element.mobile == mobile) {
            window.alert("Student Alredy Exist")
          }else{
            const newStudent = { sname, email, age, mobile, branch };
            this.setState({
              studentDetails: [...this.state.studentDetails, newStudent],
            });
          }
        });
      }
      
    }
  }
  render() {
    return (
      <div className="conatiner mt-5">
        <h2 className='text-center text-secondary'>Student Details</h2>
        <div className="inputFields mb-5">
          <input type="text" id="name" className='form-control mt-2 mb-2'placeholder='Enter Your Name'/>
          <input type="email" id="email"className='form-control mt-2 mb-2' placeholder='Enter Your Email'/>
          <input type="number" id="age" className='form-control mt-2 mb-2' placeholder='Enter Your Age'/>
          <input type="number" id="mobile" className='form-control mt-2 mb-2' placeholder='Enter Your Mobile Number'/>
          <select name="barnch" id="branch" className='form-control mt-2 mb-2'>
              <option>Select Branch</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="AI">AI</option>
              <option value="ML">ML</option>
          </select>
          <button onClick={this.addStudent} className='btn btn-primary'>Add Student</button>
        </div>
        <table className="table">
          <thead>   
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Mobile</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody>
            {this.state.studentDetails.map((element, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{element.sname}</td>
                <td>{element.email}</td>
                <td>{element.age}</td>
                <td>{element.mobile}</td>
                <td>{element.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
