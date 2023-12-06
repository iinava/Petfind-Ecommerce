import React from 'react'
import Nav from '../components/Navbar/Nav'
import '../pages/User/uhome/home.css'
import View from '../components/View/View'
import nay from '../components/View/patti.jpg'
// import { useNavigate } from 'react-router-dom'

export default function Guest() {
    // const navigate=useNavigate();
  return (
    <div>

        <Nav/>

        <br /><br /> <br /><br /> <br /><br />
        <div class="hero">
    <div class="texti">
      <h1>The ultimate platform for buying and selling pets.</h1><br/><br/>
      <p>Your one-stop destination for pet lovers! Discover, buy, and sell pets of all kinds, <br/>from adorable puppies
        and kittens to exotic companions. Join our vibrant pet community today!"</p><br/><br/>
      <div class="ser">
        <nav class=" bg-body-">
          <div class="container-fluid">
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-dark" type="submit">Search</button>
              {/* <button class="btn btn-outline-dark" onClick={navigate('/log')} >click</button> */}
            </form>
          </div>
        </nav>
      </div>
    
    </div>
    </div>
    {/* ----------------------------------------------------------------------------- */}
    
    <br /><br /><br /><br />


    
    {/* <View/> */}
    <div> <div class="cardsi">
    <div class="cardi">
        <ul>
            <li>
                <div class="imagecontainer">
                <img  class="img" src={nay}  alt=""/>
                </div>

            </li>
           
            <li>
                <h1>golden boy</h1>
            </li>
            <li>
                <p>232 dollar</p>
            </li>
{/*           
            <li>
                <a href="/buy"><i class="fa-solid fa-cart-plus fa-xl"></i></a> &nbsp;&nbsp; <a href="#"><i class="fa-regular fa-heart fa-xl"></i></a>
            </li> */}
        </ul>
    </div>
    <div class="cardi">
        <ul>
            <li>
                <div class="imagecontainer">
                <img  class="img" src={nay} alt=""/>
                </div>

            </li>
            <li>
                <h1>golden boy</h1>
            </li>
            <li>
                <p>232 dollar</p>
            </li>
            {/* <li>
                <a href="/buy"><i class="fa-solid fa-cart-plus fa-xl"></i></a> &nbsp;&nbsp; <a href="#"><i class="fa-regular fa-heart fa-xl"></i></a>
            </li> */}
        </ul>
    </div>
    <div class="cardi">
        <ul>
            <li>
                <div class="imagecontainer">
                <img  class="img" src={nay}  alt=""/>
                </div>

            </li>
            <li>
                <h1>golden boy</h1>
            </li>
            <li>
                <p>232 dollar</p>
            </li>
            {/* <li>
                <a href="/buy"><i class="fa-solid fa-cart-plus fa-xl"></i></a> &nbsp;&nbsp; <a href="#"><i class="fa-regular fa-heart fa-xl"></i></a>
            </li> */}
        </ul>
    </div>
    <div class="cardi">
        <ul>
            <li>
                <div class="imagecontainer">
                <img  class="img" src={nay}  alt=""/>
                </div>

            </li>
            <li>
                <h1>golden boy</h1>
            </li>
            <li>
                <p>232 dollar</p>
            </li>
            {/* <li>
                <a href="/buy"><i class="fa-solid fa-cart-plus fa-xl"></i></a> &nbsp;&nbsp; <a href="#"><i class="fa-regular fa-heart fa-xl"></i></a>
            </li> */}
        </ul>
    </div>
   
   
</div></div>

    <br /><br />
    {/* <!-- ---------------------------------------------------------------------review----------------- --> */}
<div class="rev">
    <div class="re">
        <ul>
            <li>
                <i class="fa-solid fa-bus fa-xl"></i>
            </li>
            <br/>
            <li>
                <h1>
                    Fast and Reliable Delivery
                </h1>
            </li>
            <li class=" textli">
                <p class="text">At hop, we understand the importance of a
                    safe and timely delivery. We work with trusted
                    shipping partners to ensure your pet arrives at
                    your doorstep in the best possible condition.
                    Rest assured, your pet's well-being is our top
                    priority.</p>
            </li>
        </ul>
    </div>
    <div class="re">
        <ul>
            <li>
                <i class="fa-solid fa-rotate-left fa-xl"></i>
            </li>
            <br/>
            <li>
                <h1>
                    Easy return within 10 days
                </h1>
            </li>
            <li class=" textli">
                <p class="text">We offer a refund policy for any pets
                    purchased through our website. Please read
                    our terms and conditions for more information.</p>
            </li>
        </ul>
    </div>
</div>
    
    
    </div>
  )
}
