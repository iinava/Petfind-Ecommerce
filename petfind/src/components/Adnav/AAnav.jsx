import React from 'react'
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
export default function AAnav() {
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
    <div><Toaster />
    <nav class="navbar navbar-expand-lg bg-body-tertiary  bg-transparent">
        <div class="container-fluid">
            <a class="navbar-brand fw-bolder" href="#">petfinder <span>:()</span></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                    <li class="nav-item">
                        <a class="nav-link fw-semibold " href="/ahome">manage users</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link fw-semibold " href="/aseller">manage seller</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link pos " href="/aproduct">manage product</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link pos " href="/aorder">See orders</a>
                    </li>
                    <li class="nav-item">
                        <button className='btn btn-dark' onClick={clearloc}>Log out</button>
                    </li>


                    &nbsp;
                    {/* <li class="nav-item">
    <a href="/log"><button class="button-33" role="button">Login</button></a>
      


  </li> */}



                </ul>

            </div>
        </div>
    </nav></div>
  )
}
