import React,{useRef, useState} from 'react'
import axios from 'axios'
export default function RejectLeaveRequest() {
  const RequestIDRef=useRef()
  const CommentRef=useRef()

  const [resp, setRes] = useState()

  function HandleReject(){
    const body={requestId:RequestIDRef.current.value, comment:CommentRef.current.value}


   axios   
   .post('http://localhost:8000/hod/rejectLeaveRequest', body, {headers:{'token': localStorage.getItem('token')}})
   
   .then(res=>{
     setRes(res.data)
    });
}

   return (

    <>
    <div >
        <div className="assignCourse">


            <span className="login100-form-title">
                Reject Leave Request
  </span>


            <div>
                <input required={true} ref={RequestIDRef} className="input100" name="requestID" placeholder="Request ID" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                </span>
                <br />
            </div>

            <div>
                <input required={false} ref={CommentRef} className="input100" name="comment" placeholder="Comment" />
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                </span>
                <br />
            </div>

        </div>        
        <br></br>
        <div className="buttons">
            <button onClick={HandleReject} className="buttons">
                Reject Request
    </button>
    <br></br>
    <br></br>
        </div>
        <ul className='viewStaff'> {resp} </ul>
        <br></br><br></br>
    </div>

</>

      
    

  )
}
