import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import AAnav from '../../components/Adnav/AAnav'

export default function Aorder() {
    const [order, setorder] = useState({})

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/adminviewpayments").then((response) => {
            console.log("all petdata",response);
            setorder(response.data.data)
      
          }).catch((err) => {
            console.log(err);
          })
  
    }, [])
    
    return (
        <div>
            <AAnav />

            <br /><br />


            <div>
        <br /><br /><table>
    <thead>
      <tr>
        <th scope="col">User</th>
        <th scope="col">petname</th>
        <th scope="col">breed</th>
        <th scope="col">quantity</th>
        <th scope="col">Amount</th>
        <th scope="col">date</th>
      </tr>
    </thead>
    <tbody>
    {order[0] ?
            <>


              {order?.map((data, key) => (   
      <tr>

        <td data-label="User">{data.username}</td>
        <td data-label="petname">{data.petname}</td>
        <td data-label="breed">{data.breed}</td>
        <td data-label="quantity">{data.quantity}</td>
        <td data-label="Amount">{data.amount}</td>
        <td data-label="date">{data.paymentdate}</td>
      </tr>
        ))}
        </>
        : <td>no orders...................</td>
        }
      
     
      
     
    
    </tbody>
  </table></div>
        </div>
    )
}

