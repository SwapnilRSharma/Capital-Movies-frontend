import React, { useState } from "react";

import "../index.css";
import { Form } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {Link , useHistory} from 'react-router-dom';
export default function Login() {

const history = useHistory();
const [user , setUser] = useState([])
const [login , setloginDetails] = useState(
    {
        "email" : "",
         "password" : ""
    }
);
let newD;
function handleChange(e) {
     newD = { ...login }
    newD[e.target.id] = e.target.value
    console.log('handle changes' , newD)
    setloginDetails(newD)
  };

  function handleLogin(){
      console.log("data" , login)
    fetch('http://localhost:3000/login', {
  method: 'POST', // or 'PUT'
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    "email" : login.email,
    "password" : login.password
  }),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  setUser(data.token);
  if(data.status == "error")
  {
    alert("Invalid credentials")
  }
  else
  {
    localStorage.setItem('user' , data.token)
  console.log(localStorage.getItem('user'))
 history.push("/")
  
  }
})
.catch((error) => {
  console.error('Error:', error);
});
    // fetch('http://localhost:3000/login')
  
    // .then((res) => res.json())
    // .then((data) => {
    //   console.log(data);
    //   setUser(data.results);
    // })
}

    return (
  
      <div className="loginForm" style={{display:'flex' , alignItems : 'center' , justifyContent : 'center' , height : '100vh'}}>
       <Form>

   

  <TextField required  className="logintext" id="email" label="Email" variant="standard"  onChange={(e)=>handleChange(e)}/>
  <TextField required className="logintext" id="password" label="Password" variant="standard" type="password"  onChange={(e)=>handleChange(e)}/>

 

  <Button variant="contained" onClick={()=>handleLogin()} className="loginButton" >Login</Button>
</Form>
      </div>
    );
  
}
