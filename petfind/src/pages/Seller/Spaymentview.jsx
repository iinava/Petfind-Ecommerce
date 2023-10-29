import React from 'react'
import '../Seller/Spay.css'
import { useState,useEffect } from 'react'
import axios from 'axios'

export default function Spaymentview() {
const sellerid=localStorage.getItem("userid")
console.log(sellerid);

    const [state, setstate] = useState([])
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/sellerviewpayment/${sellerid}`).then((response) => {
          console.log("payment views",response);
          setstate(response.data.data)
          console.log(state);
        
      
      }).catch((err) => {
        console.log(err);
      })
      }, [])
  return (
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
    {state[0] ?
            <>


              {state?.map((data, key) => (   
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
        : <td>loading...................</td>
        }
      
     
      
     
    
    </tbody>
  </table></div>
  )
}
