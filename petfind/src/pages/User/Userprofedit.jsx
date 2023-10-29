import React, { useEffect ,useState} from 'react'
import axios from 'axios'
import '../Seller/View.css'
import { useNavigate } from 'react-router-dom'
export default function Userprofedit() {
    const id=localStorage.getItem('userid')
    const [first, setfirst] = useState({})
    console.log(id);
    useEffect(()=>{
      axios.get(`http://127.0.0.1:8000/api/singleuserview/${id}`).then((response) => {
        console.log("ther is nothing",response);
        setfirst(response.data.data)
        // console.log(form);
    
    }).catch((err) => {
      console.log(err);
    })
    }, [])
  
    const [update, setupdate] = useState({})
  
    const inputchange=(event)=>{
      const{name,value}=event.target
      setfirst({...first,[name]:value})
      setupdate({...update,[name]:value})
    }
    console.log(update);
  const navigate=useNavigate()
  
    const change =(e)=>{
      e.preventDefault()
      axios.post(`http://127.0.0.1:8000/api/updateuser/${id}`,update,).then((response)=>{
    
        console.log(response);
        navigate('/uhome')
      })
    }
    
    
    return (
      <div> <center><div className="wrapper wrapo">
  
          <h1>EDIT DETAILS</h1>
  
  <form action="#">
            <div className="field">
              <input type="text" required value={first.email} name='email' onChange={inputchange} />
              <label>Email Address</label>
            </div>
            <div className="field">
              <input type="text" required value={first.name} name='name' onChange={inputchange} />
              <label>Name</label>
            </div>
            <div className="field">
              <input type="text" required value={first.phone} name='phone' onChange={inputchange} />
              <label>Phone number</label>
            </div>
           
            <div className="field">
              <input type="text" required value={first.adress} name='adress' onChange={inputchange} />
              <label>adress</label>
            </div>
            <div className="field">
              <input type="text" required value={first.pin} name='pin' onChange={inputchange} />
              <label>pin</label>
            </div>
  
            
            <div className="content">
              {/* Other content */}
            </div>
            <div className="field">
              <input type="submit" onClick={change} value="save changes" />
            </div>
            {/* <div className="signup-link">
              Already have an account? <a href="/ulog">Log in now</a>
            </div> */}
          </form>
          </div></center>
          </div>
    )
  }
  