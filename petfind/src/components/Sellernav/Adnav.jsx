import React from 'react'
import '../Sellernav/Adnav.css'
export default function Adnav() {
  return (
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary  bg-transparent">
    <div class="container-fluid">
      <a class="navbar-brand fw-bolder" href="#">petfinder <span className='spanw'>:()</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li class="nav-item">
            <a class="nav-link "  href="#">see  listing</a>
          </li> 
          <li class="nav-item ">
            <a class="nav-link pos "  href="/sorder"> Bookings  </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link pos "  href="/spayment"> Payments  </a>
          </li>
          {/* <li class="nav-item ">
            <a class="nav-link "  href="#"> add    </a>
          </li> */}
          <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  seller  <i class="fa-solid fa-user fa-lg"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/editsellerprofile">Edit </a></li>

                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Logout</a></li>

                </ul>
              </li>
          {/* <!-- <li class="nav-item">
            <a class="nav-link fw-semibold "  href="#">Home</a>
          </li> --> */}
         
      
          
         
        
        </ul>
        
      </div>
    </div>
  </nav></div>
  )
}
