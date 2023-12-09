import React, { useEffect, useReducer, useState } from 'react'
import Header from '../Header/Header'
import axios from 'axios';
import ApiEndPoint from '../ApiEndPoint/ApiEndPoint';

function Recptionlist() {

  const [receptionlist,setReceptionList] = useState();

  const loadReceptionlist = async ()=>{
    try {
      let token = sessionStorage.getItem("token");
      let response = await axios.get(ApiEndPoint.getReception,{
        headers: {Authorization : `Bearer ${token}` }
      })
      // console.log(response.data.data)
      setReceptionList(response.data.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() =>{
    loadReceptionlist();
  },[])
  
  return (
    <>
      <Header />
      <div className="container-fluid mt-2" style={{padding:"0 50px"}}>
        <table className="table">
          <thead>
            <tr>
              <th>S No.</th>
              <th>Id</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Password</th>
              <th>Address</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {receptionlist?.map((reception, index) => 
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{reception.id}</td>
                <td>{reception.name}</td>
                <td><b>{reception.phoneNumber}</b><br/><i>{reception.email}</i></td>
                <td>{reception.password}</td>
                <td>{reception.raddress}</td>
                <td>
                  <button className="btn btn-dark">Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Recptionlist
