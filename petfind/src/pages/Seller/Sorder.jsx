import React, { useEffect,useState } from 'react'
import axios from 'axios';
import '../Seller/Sorder.css'
import { useNavigate} from 'react-router-dom';


export default function Sorder() {
  const sellerid = localStorage.getItem("userid")
  const navigate = useNavigate();
  console.log(sellerid);

  const [state, setstate] = useState([])
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/api/sellerviewbooking/${sellerid}`).then((response) => {
      console.log("ther is nothing",response);
      setstate(response.data.data)
      console.log(state);
      // setform(response.data.data)
      // console.log(form);
  
  }).catch((err) => {
    console.log(err);
  })
  }, [])

const accepting =(bid)=>{
 
  axios.post(`http://127.0.0.1:8000/api/SellerApprove_orderAPIView/${bid}`).then((response) => {
    console.log("ther is nothing",response);
   
 

}).catch((err) => {
  console.log(err);
})
}


  return (
    <div>
      <center> <h1>Order Details</h1></center>
     
     <br />
      <div className="dii">
      <table>
  <thead>
 
    <tr>
      <th scope="col">username</th>
      <th scope="col">pet</th>
      <th scope="col">breed</th>
      <th scope="col">cost</th>
      <th scope="col">quanity</th>
      <th scope="col">accept</th>
      <th scope="col">reject</th>
    </tr>
  
    
  </thead>
  <tbody>
 
  {state[0] ?
            <>


              {state?.map((data, key) => (   
    <tr>
      <td data-label="username">{data.username}</td>
      <td data-label="pet">{data.name}</td>
      <td data-label="breed">{data.breed}</td>
      <td data-label="cost">{data.cost}</td>
      <td data-label="quantity">{data.quantity}</td>
      <td data-label="accept"><a href=""><button className='btn btn-light' onClick={(e)=>   {  e.preventDefault() ;accepting(data.id);}}> confirm</button></a></td>
      <td data-label="reject"><a href=""><button className='btn btn-light'> cancel</button></a></td>
    </tr>
      ))}
      </>
      : <td>loading...................</td>
      }
    
  </tbody>
</table>
      </div>
    </div>
   
  )
}
