import React from 'react'
import '../Seller/View.css'

export default function Profe() {
  return (
    <div> <center><div className="wrapper wrapo">

        <h1>EDIT DETAILS</h1>

<form action="#">
          <div className="field">
            <input type="text" required name='email' />
            <label>Email Address</label>
          </div>
          <div className="field">
            <input type="text" required name='name' />
            <label>Name</label>
          </div>
          <div className="field">
            <input type="text" required name='phone' />
            <label>Phone number</label>
          </div>
         
          <div className="field">
            <input type="text" required name='adress' />
            <label>adress</label>
          </div>
          <div className="field">
            <input type="text" required name='pin' />
            <label>pin</label>
          </div>

          <div className="field">
            <input type="password" required name='password' />
            <label>Password</label>
          </div>
          <div className="content">
            {/* Other content */}
          </div>
          <div className="field">
            <input type="submit" value="save changes" />
          </div>
          {/* <div className="signup-link">
            Already have an account? <a href="/ulog">Log in now</a>
          </div> */}
        </form>
        </div></center>
        </div>
  )
}
