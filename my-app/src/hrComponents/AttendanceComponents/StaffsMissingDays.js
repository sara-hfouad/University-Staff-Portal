import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import '../../styling/main.css';



export default function StaffsMissingDays() {
  const [staffs, setStaffs] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await
      axios
      .get('http://localhost:8000/hr/viewMissingDays', { headers: { 'token': localStorage.getItem('token') } })
      .then(res => {
        setStaffs(res.data)
        console.log("here")
        console.log(res.data)
      });
    };
    fetchData();    
  }, []);




  return (


    <div>
      <h2>Array of Staffs:</h2>
      <ul >
        {staffs.map((item, i) => {
          return <li key={i}>
            <h3> {item.staffMemberID} </h3>
            <ul> missing days this month: {item.missingDays} </ul>

            <br />
          </li>
        })}
      </ul>
    </div>




  )

}


