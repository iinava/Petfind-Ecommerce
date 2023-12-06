import axios from 'axios';
import React from 'react'
import swal from 'sweetalert';
import toast, { Toaster } from 'react-hot-toast';

// import 'react-toastify/dist/ReactToastify.css'import swal from 'sweetalert';
// import { ToastContainer,toast } from 'react-toastify'
import { useState } from 'react';
import { Navigate,useNavigate } from 'react-router-dom';

export default function Log() {
   const navigate = useNavigate()
   const [input, setinput] = useState({
      uname: '',
      password: '',
   })
   console.log(input);
   const inputchange = (event) => {

      const name = event.target.name
      const value = event.target.value
      setinput({ ...input, [name]: value })
   }

   const submit = (e) => {
      e.preventDefault()
      axios.post('http://127.0.0.1:8000/api/LoginAPIView', input).then((response) => {
         console.log(response)
         localStorage.setItem('login_id', JSON.stringify(response.data.data.login_id))
         localStorage.setItem('userid', JSON.stringify(response.data.data.userid))
         localStorage.setItem('role', JSON.stringify(response.data.data.role))
         localStorage.setItem('uname', JSON.stringify(response.data.data.uname))
         localStorage.setItem('password', JSON.stringify(response.data.data.password))
         swal("Good job", "login successful", "success");


         console.log(response.data.data.login_id);
         console.log(input);
         if (response.data.data.role == 'seller') {
            navigate("/shome")
            console.log("seller logged successfully")
         }
         else if (response.data.data.role == 'user') {
            navigate("/uhome")
            console.log("user logged successfully")
         }
         else if (response.data.data.role == 'admin') {
            navigate("/ahome")
            console.log("user logged successfully")
         }
      }).catch((error) => {
         console.log(error);
         toast.error("username or password is incorrect")
        



      })
   }






   return (
      <div>  <Toaster /><div>
         <br />
         <center>
            <div className="wrapper">
               <div className="title">
                  find your pet
               </div>
               <form action="#">
                  <div className="field">
                     <input type="text" required name='uname' onChange={inputchange} />
                     <label>user name</label>
                  </div>
                  <div className="field">
                     <input type="password" required name='password' onChange={inputchange} />
                     <label>Password</label>
                  </div>
                  <div className="content">
                     <div className="checkbox">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                     </div>
                     {/* <!-- <div className="pass-link">
            <a href="#">Forgot password?</a>
         </div> --> */}
                  </div>
                  <div className="field">
                     <input type="submit" value="Login" onClick={submit} />
                  </div>
                  <div className="signup-link">
                     Not a member? <a href="/ureg">Signup now</a>
                  </div>
                  <div className="signup-link">
                     sign up a seller? <a href="/sreg">Signup now</a>
                  </div>
               </form>
            </div></center></div></div>
   )
}
