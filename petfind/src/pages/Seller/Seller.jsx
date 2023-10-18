import React, { useEffect } from 'react'
import Adnav from '../../components/Sellernav/Adnav'
import View from '../../components/View/View'
// import '../User/uhome/ureg.css'
import '../User/ureg/ureg.css'
import '../Seller/View.css'
import nay from '../Seller/patti.jpg'
import Edit from '../../components/edit/Edit'
import Delete from '../../components/edit/Delete'
import { useState } from 'react'
import axios, { Axios } from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Seller() {


  const sellerid = localStorage.getItem("userid")
  const navigate = useNavigate();
  console.log(sellerid);

  
  const [input, setinput] = useState({
    sellerid: sellerid,

  })

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setinput({ ...input, [name]: value })
  }

  console.log(input);


  const dataadd = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', input.name)
    formData.append('species', input.species)
    formData.append('breed', input.breed)
    formData.append('cost', input.cost)
    formData.append('age', input.age)
    formData.append('image', input.image)
    formData.append('description', input.description)
    formData.append('sellerid', input.sellerid)



    axios.post("http://127.0.0.1:8000/api/addpet", formData).then((res) => {
      console.log(res);
      navigate("/shome")
      console.log("pet have been added suscessfully");



      // -----------------------closing the modal-------------

      const closeModalButton = document.getElementById("closeModalButton");
      closeModalButton.click();
      // --------clearing form fields-------------
      document.getElementById("name").value = "";
      document.getElementById("species").value = "";
      document.getElementById("breed").value = "";
      document.getElementById("cost").value = "";
      document.getElementById("age").value = "";
      document.getElementById("image").value = "";
      document.getElementById("description").value = "";

      // ______________________clearing state__________________________

      setinput({
        name: '',
        species: '',
        breed: '',
        cost: '',
        age: '',
        image: null,
        description: '',
        sellerid: sellerid,
      });
      // __________________________________________________________________________________


    }).catch((err) => {
      console.log(err);

    })
    console.log(input);


  }

  // _________________________________________________________________________________viewing part___________________________________________________

  const [state, setstate] = useState([])


  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/sellerpetview/${sellerid}`).then((response) => {
      console.log("ther is nothing");
      // console.log(response);
      setstate(response.data.data)
      // console.log(state);

    }).catch((err) => {
      console.log(err);
    })
  }, [])
  console.log(state);
  // console.log(state.id);

  // ______________________________________Delete pet________________________________________________________

  const delesh = (petid) => {
    axios.delete(`http://127.0.0.1:8000/api/deletepet/${petid}`).then((response)=>{
      console.log(response);
      console.log("works");
    })
    

  }




  return (
    <div>

      <Adnav />
      <br /><br /><br />
      <center>
        <h4>
          Enhance your pet vendoring business with petfind
        </h4>
        <p>find verified customers nearby</p>
      </center>
      <br /><br /><br />



      <div> <div className="cardsi">
         
      {state[0] ?
            <>


              {state?.map((data, key) => (

        <div  className="cardi">
          <ul>
            <li>
              <div className="imagecontainer">
                <img className="img" src={`/petb/${data.image}`} alt="" />
              </div>

            </li>

            <li>
              <h1>{data.name}</h1>
            </li>
            <li>
              <p>{data.cost}</p>
            </li>

            <li className='nava'>
              <button class="button-57" onClick={()=>{navigate(`/sedit/${data.id}`)}}><span class="text">EDIT </span><span>EDIT</span></button>
           
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onClick={()=>delesh(data.id)} class="button-57"  role="button"><span class="text">DELETE </span><span>DELETE</span></button>
            </li>
          </ul>
        </div>

))}
</>
: <td>loading...................</td>
}


      </div></div>

      <br /><br /><br /> <center>
        {/* <!-- Button trigger modal --> */}

        {/* <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
 list another
</button> */}
        {/* <!-- HTML !--> */}
        <button className="button-50" data-bs-toggle="modal" data-bs-target="#exampleModal" role="button">ADD</button>


        {/* <!-- Modal --> */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">sell your pets</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <center>
                <div className="modal-body">
                  <div className="wrapper wrapo">

                    <form action="#">
                      <div className="field">
                        <input type="text" id='name' required name='name' onChange={handleChange} />
                        <label>name </label>
                      </div>
                      <div className="field">
                        <input type="text" required id='species' name='species' onChange={handleChange} />
                        <label>species </label>
                      </div>
                      <div className="field">
                        <input type="text" required id='breed' name='breed' onChange={handleChange} />
                        <label>breed</label>
                      </div>
                      <div className="field">
                        <input type="text" required id='age' name='age' onChange={handleChange} />
                        <label>age</label>
                      </div>

                      <div className="field">
                        <input type="text" required id='cost' name='cost' onChange={handleChange} />
                        <label>cost</label>
                      </div>
                      <label htmlFor="">Add an image</label>
                      <div className="field">
                        <input type="file" required id='image' name='image' onChange={(e) => setinput({ ...input, image: e.target.files[0] })} />
                        <label></label>
                      </div>
                      <div className="field">
                        <input type="text" required id='description' name='description' onChange={handleChange} />
                        <label>add description of pet</label>
                      </div>
                      <div className="content">
                        {/* Other content */}
                      </div>
                      <div className="field">
                        <input type="submit" value="list pet" onClick={dataadd} />
                      </div>

                    </form>
                  </div>
                </div></center>
              <div className="modal-footer">
                <button type="button" id='closeModalButton' className="btn btn-dark" data-bs-dismiss="modal">Close</button>
                {/* <button type="button" className="btn btn-primary">Save changes</button> */}
              </div>
            </div>
          </div>
        </div></center>

    </div>
  )
}
