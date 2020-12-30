import React,{useRef} from 'react'
import axios from 'axios'
export default function Login() {
  const EmailRef=useRef()
  const PassRef=useRef()
  function HandleEmail(){
    const body={email:EmailRef.current.value, password:PassRef.current.value  }
  //  console.log(body)

   axios   
   .post('http://localhost:8000/login', body)
   
   .then(res=>console.log(res.data));
   
   // callAPI()
}

  return (
    <div>
     Email:
    <input ref={EmailRef} type="text"/>
    <br></br>
    Password:
    <input ref={PassRef} type="text"/>
    <br></br>
    <button onClick={HandleEmail}> login </button>
    </div>
  )
}

