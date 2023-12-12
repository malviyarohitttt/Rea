import React, { useEffect, useState } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import axios from 'axios';
import ApiEndpoint from '../../ApiEndPoint/ApiEndPoint';



function ApointmentList() {

    const [PatientList,setPatientList] = useState([]);

    const loadApointmentList = async () =>{
        try {
            let token = sessionStorage.getItem("token")
            let currentUser = sessionStorage.getItem("current_user");
            if(currentUser.type === "doctor"){
                var response = await axios.get(ApiEndpoint.apointmentListDoctor,{
                    headers:{
                        Authorization: "Bearer"+token
                    }
                })
            }else{
                var response = await axios.get(ApiEndpoint.apointmentListReception,{
                    headers:{
                        Authorization: "Bearer"+token
                    }
                })
            }

            if(response.data.status){
                setPatientList(response.data.data)
            }
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        loadApointmentList()
    }, []);

  return <>
   <Header/>
    {PatientList?.map((patient,index)=>{
        <section className='book_section layout_padding'>
        <div class="container" style={{border: "0px solid black", padding: "25px", borderRadius: "10px", boxShadow: "lightgrey 0px 0px 15px"}}>
            <div class="row">
                <div class="col">
                    <div>
                        <h4>SHUBH <span>CLINIC</span></h4>
                        <div class="form-row">
                            <div class="form-group col-lg-3"><label>Patient Name :</label><b>{patient.name}</b></div>
                            <div class="form-group col-lg-3"><label>Gender :</label><b> Male</b></div>
                            <div class="form-group col-lg-3"><label>Patient Age :</label><b> 21</b></div>
                        </div>
                        <hr />
                        <div class="form-row">
                            <div class="form-group col-lg-3"><label>Patient Contect :</label><b> 9669264149</b></div>
                            <div class="form-group col-lg-3"><label>Doctor ID:</label><b> 373</b></div>
                            <div class="form-group col-lg-3"><label>Address :</label><b> 443</b></div>
                            <div class="form-group col-lg-3"></div>
                        </div>
                        <hr />
                        <div class="form-row">
                            <div class="form-group col-lg-6"><label>Daignosis :</label><b> </b></div>
                            <div class="form-group col-lg-6">
                                <label>Appointment : </label><br />
                                <b>Date : 2023-12-14</b><br />
                                <b>Time : 12:40</b>
                            </div>
                        </div>
                        <div class="btn-box">
                            <hr />
                            <hr />
                            <div class="form-row">
                                <div class="form-group col-lg-3"><label>Receptionist ID :</label><b> 443</b></div>
                                <div class="form-group col-lg-3"><label>Receptionist Name : </label><b> vishal</b></div>
                                <div class="form-group col-lg-3">
                                    <label><b>Contact</b></label><br />
                                    Phone Number : 4455885596<br />
                                    <i>Email : vishal@gmail.com</i>
                                </div>
                                <div class="form-group col-lg-3"><label>Reception Address : </label><b> Indore</b></div>
                            </div>
                            <hr />
                            <div class="form-row text-center">
                                <div class="form-group col-lg-4"><button class="btn btn-info">UPDATE</button></div>
                                <div class="form-group col-lg-4"></div>
                                <div class="form-group col-lg-4"><button class="btn btn-danger">DELETE</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    })}
   <Footer/>
  </>
}

export default ApointmentList
