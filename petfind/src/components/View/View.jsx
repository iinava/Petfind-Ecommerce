import React, { useEffect } from 'react'
import '../View/View.css'
import nay from '../View/patti.jpg' 
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function View() {
  

    const navigate = useNavigate()
    const [form, setform] = useState({

    })
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/allpetview").then((response) => {
          console.log("ther is nothing");
          // console.log(response);
          setform(response.data.data)
          // console.log(state);
    
        }).catch((err) => {
          console.log(err);
        })
      }, [])
      console.log(form);
  return (
    <div> <div class="cardsi">
    {form[0] ?
            <>


              {form?.map((data, key) => (
    <div class="cardi">
        <ul>
            <li>
                <div class="imagecontainer">
                <img  class="img"src={`/petb/${data.image}`} alt=""/>
                </div>

            </li>
            <li>
                <p>{data.name}</p>
            </li>
            <li>
                <h1>{data.breed}</h1>
            </li>
            <li>
                <h1>{data.cost} INR </h1>
            </li>
            <li>
               <i class="fa-solid fa-cart-plus fa-xl"  onClick={()=>{navigate(`/buy/${data.id}`)}}></i> &nbsp;&nbsp; <a href="#"><i class="fa-regular fa-heart fa-xl"></i></a>
            </li>
        </ul>
    </div>
    
))}
</>
: <td>loading...................</td>
}


   
   
</div></div>
  )
}
