import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {FaEdit} from 'react-icons/fa'
import {ImBin} from 'react-icons/im'
import { useNavigate } from 'react-router-dom';
const Views = () => {
  const [view,setView] = useState([]);
  const navigate = useNavigate();

  const displayViews = () => {
      axios.get(`https://booky-view-be.onrender.com/api/view`)
      .then((res)=>setView(res.data))
  }
  useEffect(()=>{
      displayViews();
  },[])

  const deleteView = (e) => {
    axios.delete(`https://booky-view-be.onrender.com/api/view/${e.target.value}`,e.target.value)
    setView((view) => {
      return view.filter((i) => i._id !==e.target.value)
    })
  }
  return (
    <div className='commonClass container'>
        <div className='content'>
          {view && view.map((item,index) => (
            <div className="card cardItems" key={index}>
              <div className='card-header text-light' style={{backgroundColor:"navy"}}>
              <h5 className="card-title" style={{textAlign:"center"}}>{item.title} - {item.author}</h5>
              </div>
              <div className='row items'>
              <div className='col'>
              <img src={item.selectedFile} className="card-img" alt="..."/>
              </div>
                <div className="col">
                  <p className="card-text">{item.review}</p>
                  <div className='d-grid gap-2 col-6 mx-auto'>
                  <button className='btn btn-success' onClick={()=>navigate(`/updateView/${item._id}`)}><FaEdit/>Edit</button>
                  <button className='btn btn-danger' value={item._id} onClick={deleteView}><ImBin/>Delete</button>    
                    </div>

                </div>
              </div>
          </div>
          ))}
        </div>
    </div>
  )
}

export default Views