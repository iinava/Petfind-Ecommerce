import React, { useEffect } from 'react'
import '../Seller/View.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

export default function Sedit() {

  const {id}=useParams();
  console.log(id)
  const [form, setform] = useState({})
  const [update, setupdate] = useState({})


  const inputchange=(event)=>{
    const{name,value}=event.target
    setform({...form,[name]:value})
    setupdate({...update,[name]:value})
  }
  console.log(update);

useEffect(()=>{
  axios.get(`http://127.0.0.1:8000/api/singlepetview/${id}`).then((response) => {
    console.log("ther is nothing",response);
    setform(response.data.data)
    // console.log(form);

}).catch((err) => {
  console.log(err);
})
}, [])


const navigate=useNavigate()
// --------
const change =(e)=>{
  e.preventDefault()
  axios.post(`http://127.0.0.1:8000/api/updatepet/${id}`,update,).then((response)=>{

    console.log(response);
    navigate('/shome')
  })
}






  return (
    <div> <center><div className="wrapper wrapo">

    <h1>EDIT DETAILS</h1>
    <form action="#">
      <div className="field">
        <input type="text" required name='name' value={form.name} onChange={inputchange} />
        <label> Edit name </label>
      </div>
      <div className="field">
        <input type="text" required name='breed' value={form.breed}  onChange={inputchange}/>
        <label> Edit breed</label>
      </div>
      <div className="field">
        <input type="text" required name='age' value={form.age} onChange={inputchange} />
        <label> Edit age</label>
      </div>
      <div className="field">
        <input type="text" required name='quantity' value={form.quantity} onChange={inputchange} />
        <label> Edit quantity</label>
      </div>
      {/* <div className="field">
          <input type="text" required name='phone' />
          <label>Phone number</label>
        </div> */}
      <div className="field">
        <input type="text" required name='cost' value={form.cost}  onChange={inputchange}/>
        <label> Edit cost</label>
      </div>
      <label htmlFor="">Edit  image</label>
      <div className="field">
        <input type="file" required name='image' onChange={inputchange} />
        <label></label>
      </div>
      <div className="field">
        <input type="text" required name='description'  value={form.description} onChange={inputchange}/>
        <label>Edit description of pet</label>
      </div>
      <div className="content">
        {/* Other content */}
      </div>
      <div className="field">
        <input type="submit" value="save changesss"  onClick={change}/>
      </div>

    </form>
  </div></center>
  </div>
  )
}
