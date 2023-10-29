import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Toaster,toast } from 'react-hot-toast'

export default function Sreg() {

const [input, setinput] = useState({
  name:'',
  uname:'',
  email:'',
  shop:'',
  adress:'',
  pin:'',
  phone:'',
  password:'',

})
const [prob, seterror] = useState({})
const [issubmit, setsubmit] = useState(false)

const validate=(values)=>{
  var error={}
  const ema = /\S+@\S+\.\S+/;
  const pho = /^\d{10}$/;
  const pi = /^\d{6}$/;
  const pw = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

 if (!values.name){
  error.name='name cannot be null'
 }
 if (!values.uname){
  error.uname='user name cannot be null'
 }
 if (!values.email) {
  error.email = 'Email cannot be null';
} else if (!ema.test(values.email)) {
  error.email = 'Invalid email format';
}

 if (!values.shop){
  error.shop='shop cannot be null'
 }
 if (!values.adress){
  error.adress='adress cannot be null'
 }
 if (!values.pin) {
  error.pin = 'PIN cannot be null';
} else if (!pi.test(values.pin)) {
  error.pin = 'Invalid PIN format (must be 6 digits)';
}
if (!values.phone) {
  error.phone = 'Phone number cannot be null';
} else if (!pho.test(values.phone)) {
  error.phone = 'Invalid phone number format';
}
 if (!values.password) {
  error.password = 'Password cannot be null';
} else if (!pw.test(values.password)) {
  error.password = 'Password must contain at least one capital letter and one number (minimum 6 characters)';
}

return error
}






console.log(input);


const inputchange=(event)=>{
  const name=event.target.name
  const value=event.target.value

  setinput({...input,[name]:value})
}



const navigate=useNavigate();
const dataadd=(e)=>{
  e.preventDefault();
  seterror(validate(input))
  setsubmit(true)

if (Object.keys(prob).length===0&&issubmit){
  axios.post('http://127.0.0.1:8000/api/sellerregister',input).then((res)=>{
    toast.success("register sucess")
    console.log(res);
    navigate("/log")
  }).catch((err)=>{
    console.log(err)
  })
  console.log(input);
}





}














  return (
    <div>  <Toaster/> <div> <div>
    <center>
      <br />
      <div className="wrapper">
        <div className="title">
       list your  pets
       <p>signup as a seller</p>
        </div>
        <form action="#">
          <div className="field">
            <input type="text" required name='name' value={input.name} onChange={inputchange}  onClick={()=>{seterror({...prob,name:''})}}  />
            <span style={{ color: prob.name ? 'red' : '' }}> {prob.name}</span>
            <label>Name</label>
          </div>
          <div className="field">
            <input type="text" required name='uname' value={input.uname} onChange={inputchange}  onClick={()=>{seterror({...prob,uname:''})}}/>
            <span style={{ color: prob.name ? 'red' : '' }}> {prob.uname}</span>
            <label>user name</label>
          </div>
          <div className="field">
            <input type="text" required name='email' value={input.email} onChange={inputchange} onClick={()=>{seterror({...prob,email:''})}} />
            <span style={{ color: prob.name ? 'red' : '' }}> {prob.email}</span>
            <label>Email Address</label>
          </div>
          <div className="field">
            <input type="text" required name='shop' value={input.shop} onChange={inputchange} onClick={()=>{seterror({...prob,shop:''})}} />
            <span style={{ color: prob.name ? 'red' : '' }}> {prob.shop}</span>
            <label>shop</label>
          </div>
          <div className="field">
            <input type="text" required name='adress' value={input.adress} onChange={inputchange} onClick={()=>{seterror({...prob,adress:''})}} />
            <span style={{ color: prob.name ? 'red' : '' }}> {prob.adress}</span>
            <label>adress</label>
          </div>
          <div className="field">
            <input type="text" required name='pin' value={input.pin}  onChange={inputchange} onClick={()=>{seterror({...prob,pin:''})}} />
            <span style={{ color: prob.name ? 'red' : '' }}> {prob.pin}</span>
            <label>pin</label>
          </div>
          <div className="field">
            <input type="text" required name='phone' value={input.phone} onChange={inputchange} onClick={()=>{seterror({...prob,phone:''})}} />
            <span style={{ color: prob.name ? 'red' : '' }}> {prob.phone}</span>
            <label>Phone number</label>
          </div>
          <div className="field">
            <input type="password" required name='password'value={input.password}  onChange={inputchange}  onClick={()=>{seterror({...prob,password:''})}}/>
            <span style={{ color: prob.name ? 'red' : '' }}> {prob.password}</span>
            <label>Password</label>
          </div>
          <div className="content">
            {/* Other content */}
          </div>
          <div className="field">
            <input type="submit" value="Register"  onClick={dataadd} />
          </div>
          <div className="signup-link">
            Already have an account? <a href="/log">Log in now</a>
          </div>
        </form>
      </div>
    </center>
  </div></div></div>
  )
}
