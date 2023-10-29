import React from 'react'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


export default function Usenav() {
  const navigate = useNavigate();
  const clearloc = (e) => {
    e.preventDefault(); // Prevent the default anchor tag behavior

    // Navigate to the login page before clearing localStorage
    navigate('/log');

    // Delay clearing localStorage and displaying the toast message
    setTimeout(() => {
      localStorage.clear();
      toast.success("Logout successful");
    }, 1000); // Delay for 1 second (adjust the delay as needed)
  }



  return (
    <div>
     <Toaster />
      <nav class="navbar navbar-expand-lg bg-body-tertiary  bg-transparent">                                                                                                                                       
        <div class="container-fluid">
          <a class="navbar-brand fw-bolder" href="/uhome">petfinder <span className='spanw'>:()</span></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              {/* <li class="nav-item">

            
            <a class="nav-link "  href="#">Browse  <i class="fa-solid fa-magnifying-glass fa-lg"></i></a>
          </li>  */}
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Bookings<i class="fa-solid fa-user fa-lg"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/order">Pending </a></li>

                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="/Accorder">Approved</a></li>

                </ul>
              </li>
             
            
              {/* <li class="nav-item ">
                <a class="nav-link " href="#">Fav <i class="fa-solid fa-heart fa-lg"></i></a>
              </li> */}
              {/* <li class="nav-item">
            <a class="nav-link pos "  href="#"> User  <i class="fa-solid fa-user fa-lg"></i></a>
          </li> */}
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  user <i class="fa-solid fa-user fa-lg"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="/edituserprofile">Edit </a></li>

                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" onClick={clearloc} href="">Logout</a></li>

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
