
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login (){

  
let navigate=useNavigate();

        const [user, setUser] = useState({
            email: "",
            password:"",
        })
    
        const [errors, setErrors] = useState({
            emailError: "",
            passwordError:"",
        })
    
const [isloading,setisloading]=useState(false)

        const handleValidation = (evt) => {
 if (evt.target.name === "email") {
                setUser({ ...user, email: evt.target.value })
                setErrors({ ...errors, emailError: (evt.target.value.length == 0) ? "required" : (evt.target.value.includes("@") ? "" : "Email must includes @") })
            }
    
     else if (evt.target.name === "password") {
        setUser({ ...user, password: evt.target.value })
        setErrors({ ...errors, passwordError: (evt.target.value.length == 0) ? "required" : (evt.target.value.length<=5)?"password must be more than 5 characters":"" })
    }
        }
    
     
        const handleSubmit = (evt) => {
            setisloading(true)
            evt.preventDefault()
        }

    return <>
    <div className="row">
    <div className="col-3"></div>
    
    <div className="col-6 border p-5 mt-5">
    
    <form onSubmit={(e) => { handleSubmit(e) }}>
      <div classNameName="mb-3">
        <label htmlfor="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control"
          value={user.email} name="email" onChange={(e) => { handleValidation(e) }} 
          />
          <p style={{ color: 'red' }}>{errors.emailError}</p>
      </div>

      <div className="mb-3">
        <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"
        
        value={user.password} name="password" onChange={(e) => { handleValidation(e) }} 
        />
        <p style={{ color: 'red' }}>{errors.passwordError}</p>
      </div>


      <button type="submit" className="btn btn-primary">
       {isloading==true?<i className='fas fa-spinner fa-spin'></i>:'Login'} 
  </button>
    </form>
    
    
    </div>
    
    <div className="col-3"></div>
    </div>

    
    </>
    
     }
    