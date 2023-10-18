import React from 'react'
import '../ureg/ureg.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Ureg() {

  const [input, setinput] = useState({
    name: '',
    uname: '',

    email: '',
    phone: '',
    adress: '',
    pin: '',
    password: '',
  })

  const [probs, seterror] = useState({})
  const [issubmit, setsubmit] = useState(false)
  // const [isverified, setverified] = useState(false)



  const validate = (values) => {
    var error = {}

    const ema = /\S+@\S+\.\S+/;
    const pho = /^\d{10}$/;
    const pi = /^\d{6}$/;
    const pw = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    
    if (!values.name) {
      error.name = 'name cannot be null'
    }

    if (!values.uname) {
      error.uname = 'user name cannot be null'
    }
    if (!values.email) {
      error.email = 'Email cannot be null';
    } else if (!ema.test(values.email)) {
      error.email = 'Invalid email format';
    }

    if (!values.phone) {
      error.phone = 'Phone number cannot be null';
    } else if (!pho.test(values.phone)) {
      error.phone = 'Invalid phone number format';
    }
    if (!values.adress) {
      error.adress = 'adress cannot be null'
    }
    if (!values.pin) {
      error.pin = 'PIN cannot be null';
    } else if (!pi.test(values.pin)) {
      error.pin = 'Invalid PIN format (must be 6 digits)';
    }
    if (!values.password) {
      error.password = 'Password cannot be null';
    } else if (!pw.test(values.password)) {
      error.password = 'Password must contain at least one capital letter and one number (minimum 6 characters)';
    }

    return error




  }


  console.log(input);
  const inputchange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setinput({ ...input, [name]: value })
  }

  const navigate = useNavigate();


  const datadd = (e) => {
    e.preventDefault();
    seterror(validate(input))
    setsubmit(true)

    if (Object.keys(probs).length === 0 && issubmit) {

      axios.post('http://127.0.0.1:8000/api/userregister', input).then((res) => {
        console.log(res);
        navigate('/log')
      }).catch((err) => {
        console.log(err)
      })
      console.log(input);



    }


  }








  return (






    <div> <div>
      <center>
        <br />
        <div className="wrapper">
          <div className="title">
            find your pet...
          </div>
          <form action="#"   >
            <div className="field">
              <input type="text" required name='name' value={input.name} onChange={inputchange} onClick={() => { seterror({ ...probs, name: '' }) }} />
              <span style={{ color: probs.name ? 'red' : '' }}> {probs.name}</span>
              <label>Name</label>
            </div>
            <div className="field">
              <input type="text" required name='uname' value={input.uname} onChange={inputchange} onClick={() => { seterror({ ...probs, uname: '' }) }} />
              <span style={{ color: probs.uname ? 'red' : '' }}> {probs.uname}</span>
              <label>use name</label>
            </div>
            <div className="field">
              <input type="text" required name='email' value={input.email} onChange={inputchange} onClick={() => { seterror({ ...probs, email: '' }) }} />
              <span style={{ color: probs.email ? 'red' : '' }}> {probs.email}</span>
              <label>Email Address</label>
            </div>
            <div className="field">
              <input type="text" required name='phone' value={input.phone} onChange={inputchange} onClick={() => { seterror({ ...probs, phone: '' }) }} />
              <span style={{ color: probs.phone ? 'red' : '' }}> {probs.phone}</span>
              <label>Phone number</label>
            </div>

            <div className="field">
              <input type="text" required name='adress' value={input.adress} onChange={inputchange} onClick={() => { seterror({ ...probs, adress: '' }) }} />
              <span style={{ color: probs.adress ? 'red' : '' }}> {probs.adress}</span>

              <label>adress</label>
            </div>
            <div className="field">
              <input type="text" required name='pin' value={input.pin} onChange={inputchange} onClick={() => { seterror({ ...probs, pin: '' }) }} />
              <span style={{ color: probs.pin ? 'red' : '' }}> {probs.pin}</span>
              <label>pin</label>
            </div>

            <div className="field">
              <input type="password" required name='password' value={input.password} onChange={inputchange} onClick={() => { seterror({ ...probs, password: '' }) }} />
              <span style={{ color: probs.password ? 'red' : '' }}> {probs.password}</span>
              <label>Password</label>
            </div>
            <div className="content">
              {/* Other content */}
            </div>
            <div className="field">
              <input type="submit" value="Register" onClick={datadd} />
            </div>
            <div className="signup-link">
              Already have an account? <a href="/log">Log in now</a>
            </div>
          </form>
        </div>
      </center>
    </div></div>
  )
}
