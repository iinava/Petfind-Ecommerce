import React from 'react'
import Usenav from '../../../components/userNav/Usenav'
import '../uhome/home.css'
import View from '../../../components/View/View'
import axios from 'axios'
import { useState } from 'react';



export default function Uhome() {
    const [formData, setFormData] = useState({
        query: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    }

    const [first, setfirst] = useState({})

    const search =(e)=>{
        e.preventDefault();
        axios.post("http://127.0.0.1:8000/api/petsearch",formData)
        .then((res) => {
          console.log("Pet search data");
        //  console.log(res);
         setfirst(res.data.data)
         console.log(first);
        
        })
        .catch((err) => {
          console.log(err);

        });
    }



    return (
        <div>
            <div className="navigation">
                <Usenav />
            </div>


            <br /><br /><br />
            <div className="hero">
                <div className="texti">
                    <h1>Find pets</h1>
                    <p>Search your favourite  pet </p><br /><br />
                    <div className="ser">
                        <nav className=" bg-body-">
                            <div className="container-fluid">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type='' name="query"
                                        value={formData.query}
                                        onChange={handleChange} aria-label="Search" />
                                    <button className="btn btn-outline-dark" type="submit" onClick={search} >Search</button>
                                </form>
                            </div>
                        </nav>
                    </div>

                </div>
            </div>
            {/* ----------------------------------------------------------------------------- */}

            <br /><br /><br /><br />


            <View  />

            <br /><br />
            {/* <!-- ---------------------------------------------------------------------review----------------- --> */}
            {/* <div className="rev">
    <div className="re">
        <ul>
            <li>
                <i className="fa-solid fa-bus fa-xl"></i>
            </li>
            <br/>
            <li>
                <h1>
                    Fast and Reliable Delivery
                </h1>
            </li>
            <li className=" textli">
                <p className="text">At hop, we understand the importance of a
                    safe and timely delivery. We work with trusted
                    shipping partners to ensure your pet arrives at
                    your doorstep in the best possible condition.
                    Rest assured, your pet's well-being is our top
                    priority.</p>
            </li>
        </ul>
    </div>
    <div className="re">
        <ul>
            <li>
                <i className="fa-solid fa-rotate-left fa-xl"></i>
            </li>
            <br/>
            <li>
                <h1>
                    Easy return within 10 days
                </h1>
            </li>
            <li className=" textli">
                <p className="text">We offer a refund policy for any pets
                    purchased through our website. Please read
                    our terms and conditions for more information.</p>
            </li>
        </ul>
    </div>
</div>
     */}


        </div>
    )
}
