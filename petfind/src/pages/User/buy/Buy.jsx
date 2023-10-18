import React, { useEffect } from 'react'
import { useState } from 'react'
import '../buy/buy.css'
import dogi from '../buy/dog.jpg'
import Counter from '../../../components/Counter'
import axios from 'axios'
import { useParams } from 'react-router-dom'


export default function Buy() {
    const {id}=useParams();
    const [form, setform] = useState({})
  console.log(id)

  
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/singlepetview/${id}`).then((response) => {
          console.log("ther is nothing",response);
          setform(response.data.data)
          // console.log(form);
      
      }).catch((err) => {
        console.log(err);
      })
      }, [])
  return (
    <div>
    
    <div class="payment-screen">
    {/* <!-- <img src="https://image.freepik.com/free-vector/purple-background-with-neon-frame_52683-34124.jpg"  class="background-image" alt="">-->  */}
    <div class="payment-card">
        <div class="card-left">
            <img
                src={`/petb/${form.image}`}
                class="product-image"
                alt="Shoes"
            />
            <br />
            <h1>{form.name}</h1>
            <p>{form.breed}</p>
            <p>{form.cost} </p>
        </div>
        <div class="card-right">
            <form action="">
              
                <h2>Book</h2>
                <hr />
                <p>{form.name}</p>
               <hr />
                <p> {form.breed}</p>

                <p>{form.details}</p>
                <hr />
                <p>  {form.age} y/o</p>
                <hr />
                <p>{form.cost} Inr</p>
                <hr />
               
                
                <p> Quantity </p>
                <center><Counter/></center>
               
                <button type="submit" class="checkout-button">book</button>
            </form>
        </div>
    </div>
</div>


</div>

  )
}
