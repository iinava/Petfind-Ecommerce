import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

import './Admin.css'
import AAnav from '../../components/Adnav/AAnav'


export default function Adhome() {
    const [form, setform] = useState({

    })
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/alluserview").then((response) => {
          console.log("all users",response);
          setform(response.data.data)
    
        }).catch((err) => {
          console.log(err);
        })
      }, [])
    return (
        <div>

           <AAnav/>

            <br /><br />
            <div className="users">
                <div className="uu">
                {form[0] ?
            <>


              {form?.map((data, key) => (
                <div class="card" style={{ width: '18rem' }}>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">{data.name}</li>
                            <li class="list-group-item">{data.email}</li>
                            <li class="list-group-item">{data.pin}</li>
                            <li class="list-group-item">{data.phone}</li>
                            <li class="list-group-item">{data.adress}</li>
                        </ul>
                        <div class="card-footer">
                           {/* <a href="" className='btn btn-outline-dark'> Delete <i class="fa-solid fa-trash fa-lg"></i></a>  */}
                        </div>
                    </div>
                  ))}
                  </>
                  : <td>loading...................</td>
                  }
                  
                 



                </div>
            </div>









        </div>
    )
}
