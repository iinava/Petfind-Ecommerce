import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../Admin/Admin.css'
import  patti from '../Admin/patti.jpg'
import AAnav from '../../components/Adnav/AAnav'

export default function Aproduct() {
    const [pet, setpet] = useState({

    })
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/allpetview").then((response) => {
          console.log("all petdata",response);
          setpet(response.data.data)
    
        }).catch((err) => {
          console.log(err);
        })
      }, [])
    return (
        <div>
           <AAnav/>

            <br /><br />

            <div className="uu">
            {pet[0] ?
     <>


       {pet?.map((data, key) => (
                <div class="card "style={{ width: '18rem' }}>
                    <img src={`/petb/${data.image}`} class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title">{data.name}</h5>
                        <p class="card-text">{data.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{data.breed}</li>
                        <li class="list-group-item">{data.age}</li>
                        <li class="list-group-item">{data.cost}</li>

                    </ul>
                    <div class="card-body">
                        {/* <a href="#" class="card-link">Delete</a> */}
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
