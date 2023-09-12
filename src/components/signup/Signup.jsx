import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export function Signup (){

  
let navigate=useNavigate();

        const [user, setUser] = useState({
            name: "",
            email: "",
            username:"",
            password:"",
            confirmpassword:"",
    
        })
    
        const [errors, setErrors] = useState({
            nameError: "",
            emailError: "",
            usernameError:"",
            passwordError:"",
            confirmpasswordError:"",
        })
    
const [isloading,setisloading]=useState(false)

        const handleValidation = (evt) => {
     if (evt.target.name === "name") {
                setUser({ ...user, name: evt.target.value })
                setErrors({ ...errors, nameError: (evt.target.value.length == 0) ? " required" :  "" })
    
            } 
            
    else if (evt.target.name === "email") {
                setUser({ ...user, email: evt.target.value })
                setErrors({ ...errors, emailError: (evt.target.value.length == 0) ? "required" : (evt.target.value.includes("@") ? "" : "Email must includes @") })
            }
    
     else if (evt.target.name === "username") {
            setUser({ ...user, username: evt.target.value })
            setErrors({ ...errors, usernameError: (evt.target.value.length == 0) ? "required" : (evt.target.value.includes(" ") ? "User name must contains no space":"" ) })
        }
     else if (evt.target.name === "password") {
        setUser({ ...user, password: evt.target.value })
        setErrors({ ...errors, passwordError: (evt.target.value.length == 0) ? "required" : (evt.target.value.length<=5)?"password must be more than 5 characters":"" })
    }
    else if (evt.target.name === "confirmpassword") {
      setUser({ ...user, confirmpassword: evt.target.value })
      setErrors({ ...errors, confirmpasswordError: (evt.target.value!=user.password) ? "Invalid password" :"" })
  }
    


        }
    
     
async function sendRegistrationDatatoApi(){
let {data} =await axios.post('http://localhost:4444/user',user)
console.log(data);
if(data.message=='success'){
setisloading(false)
navigate('/login')
}
else{

}
}
        const handleSubmit = (evt) => {
            setisloading(true)
            evt.preventDefault()
          
            // sendRegistrationDatatoApi()
        }

    return <>
    <div className="row">
    <div className="col-3"></div>
    
    <div className="col-6 border p-5 mt-5">
    
    <form onSubmit={(e) => { handleSubmit(e) }}>
      <div classNameName="mb-3">
        <label htmlfor="exampleInputname" className="form-label">Name</label>
        <input type="text" className="form-control" id="exampleInputname"
        value={user.name} name="name" onChange={(e) => { handleValidation(e) }} 
        />
        <p style={{ color: 'red' }}>{errors.nameError}</p>
      </div>
    
    
      <div classNameName="mb-3">
        <label htmlfor="exampleInputEmail1" className="form-label">Email</label>
        <input type="email" className="form-control"
          value={user.email} name="email" onChange={(e) => { handleValidation(e) }} 
          />
          <p style={{ color: 'red' }}>{errors.emailError}</p>
      </div>
    
    
      <div classNameName="mb-3">
        <label htmlfor="exampleInputusername" className="form-label"> User Name</label>
        <input type="text" className="form-control" id="exampleInputusername"    
         value={user.username} name="username" onChange={(e) => { handleValidation(e) }} 
        />
        <p style={{ color: 'red' }}>{errors.usernameError}</p>
      </div>
    
    
      <div className="mb-3">
        <label htmlfor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"
        
        value={user.password} name="password" onChange={(e) => { handleValidation(e) }} 
        />
        <p style={{ color: 'red' }}>{errors.passwordError}</p>
      </div>
    
    <div className="mb-3">
        <label htmlfor="exampleInputPassword2" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="exampleInputPassword2"
        
        value={user.confirmpassword} name="confirmpassword" onChange={(e) => { handleValidation(e) }} 
        />
        <p style={{ color: 'red' }}>{errors.confirmpasswordError}</p>
      </div>

      <button type="submit" className="btn btn-primary">
       {isloading==true?<i className='fas fa-spinner fa-spin'></i>:'Register'} 
  </button>
    </form>
    
    
    </div>
    
    <div className="col-3"></div>
    </div>
    
    
    
    
    
    </>
    
    
    
    
     }
    