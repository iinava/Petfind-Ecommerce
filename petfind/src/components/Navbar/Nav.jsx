import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <div><nav class="navbar navbar-expand-lg bg-body-tertiary  bg-transparent">
      <div class="container-fluid">
        <a class="navbar-brand fw-bolder" href="#">petfinder <span>:()</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
            <li class="nav-item">
              <a class="nav-link fw-semibold " href="#">browse</a>
            </li>
            <li class="nav-item">
              <a class="nav-link pos " href="#">about</a>
            </li>
            {/* <li class="nav-item ">
            <a class="nav-link fw-semibold"  href="#"> favourites</a>
          </li> */}
            {/* <!-- <li class="nav-item">
            <a class="nav-link fw-semibold "  href="#">Home</a>
          </li> --> */}

            &nbsp;
            <li class="nav-item">
              <a href="/log">  <button className='btn btn-dark'>Login</button>
              </a>


            </li>
            &nbsp;   &nbsp;
            <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            register
          </button>
          <ul class="dropdown-menu kothu dropdown-menu-dark">
            <li><a class="dropdown-item" href="/ureg">as user</a></li>
            <li><a class="dropdown-item" href="/sreg">as seller</a></li>
          </ul>
        </li>



          </ul>

        </div>
      </div>
    </nav></div>
  )
}
