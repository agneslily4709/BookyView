import React, { useState } from 'react'
import FileBase from 'react-file-base64';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Input = () => {
    const navigate = useNavigate();
    const [newView,setNewView] = useState({title:"",author:"",review:"",selectedFile:""})

    const handleReviewSubmit =async (e) => {
            e.preventDefault();
           await axios.post(`https://booky-view-be.onrender.com/api/view`,newView)
            .then((res) => console.log(res))
            navigate('/')
    }

    const inputHandle = (e) => {
        setNewView({...newView,[e.target.name] : e.target.value })
    }

  return (
    <div className='commonClass container'>
        <form className='input'>
        <h1>Write a Review</h1>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input name='title' value={newView.title} onChange={inputHandle} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Author</label>
            <input name='author' value={newView.author} onChange={inputHandle} type="text" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Review</label>
            <textarea name='review' value={newView.review} onChange={inputHandle} className="form-control" placeholder="Type your review here" id="floatingTextarea2" style={{height:"100px"}} rows={3}></textarea>
        </div>
        <div className='mb-3'>
        <FileBase multiple={false}  onDone={({ base64 }) => setNewView({ ...newView, selectedFile: base64 })} />
        </div>
        <div>
        </div>
        <button type="submit" className="btn btn-secondary" onClick={handleReviewSubmit}>Add My Review</button>
        </form>
    </div>
  )
}

export default Input