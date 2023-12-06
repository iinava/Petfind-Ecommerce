import React, { useEffect } from 'react'
import '../View/View.css'
import nay from '../View/patti.jpg' 
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../../redux/slice/Productslice'

export default function View({ first }) {
  
   const  dispatch=useDispatch()
   const {productData,loading,error}=useSelector(state=>state.product)
   console.log(productData,loading,error);

   console.log(error);
    const navigate = useNavigate()

    const [form, setform] = useState({

    })
    // setform(first)
    // useEffect(() => {
    //     axios.get("http://127.0.0.1:8000/api/allpetview").then((response) => {
    //       console.log("ther is nothing");
    //       setform(response.data.data)
    
    //     }).catch((err) => {
    //       console.log(err);
    //     })
    //   }, [])

    useEffect(()=>{
      dispatch(productList())
 
    },[])






      console.log(form);
  return (
    <div> <div class="cardsi">
    {productData[0] ?
            <>


              {productData?.map((data, key) => (
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
