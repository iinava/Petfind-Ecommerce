import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import Usenav from '../../../components/userNav/Usenav';
import { useNavigate } from 'react-router-dom';


export default function Accorder() {
  const uid =localStorage.getItem("userid")
   const [first, setfirst] = useState([])
   console.log(uid);

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/buyerviewbooking/${uid}`).then((response) => {
          console.log("ther is nothing",response);
          setfirst(response.data.data)
      
      }).catch((err) => {
        console.log(err);
      })
      }, [])
   const navigate=useNavigate();
 
  return (
    <div>
<Usenav/>
   <br /><br /><br />
    <center>pending orderes</center>
    <br /><br />
      
    
    
                <div className="flex">
    
    
    
    
      {first[0] ?
                <>
    
    
                  {first?.map((data, key) => (   
    
    <div class="card" style={{ width: '18rem' }}>
      <img src={`/petb/${data.image}`}class="card-img-top fit" alt=".../"/>
      <div class="card-body">
        <h2>{data.name}</h2>
        <p class="card-text">{data.description}</p>
        <p class="card-text">{data.cost}</p>
        <p class="card-text">{data.breed}</p>
        <p class="card-text"> count:{data.quantity}</p>
        <button class="btn btn-outline-dark" onClick={()=>{navigate(`/payment/${data.id}`)}} >Checkout </button>
      </div>
    </div>
    
                    ))}
                    </>
                    : <td>loading...................</td>
                    }
                   
                    </div>
    
    
    
                    </div>
  )
}
