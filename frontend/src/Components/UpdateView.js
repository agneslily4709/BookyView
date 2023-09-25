import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import FileBase from 'react-file-base64';
const UpdateView = () => {
    const navigate = useNavigate();
    const [update,setUpdate] = useState({title:"",author:"",review:"",selectedFile:""})
    const params = useParams();
    useEffect(()=>{
        axios.get(`https://booky-view-be.onrender.com/api/view/${params.id}`)
        .then((data) => setUpdate(data.data))
    },[params.id])
const inputHandle=(e)=>{
    setUpdate({...update,[e.target.name] : e.target.value})
}
const handleUpdation = (e)=>{
    e.preventDefault();
    axios.put(`https://booky-view-be.onrender.com/api/view`,update)
    .then((res) => setUpdate({title:"",author:"",review:"",selectedFile:""}))
    navigate('/')
}

  return (
    <div className='commonClass container'>
        <form className='input'>
            <h1>Update your view</h1>
        <div className="mb-3 inputTag">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input name='title' value={update.title} onChange={inputHandle} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 inputTag">
            <label htmlFor="exampleInputPassword1" className="form-label">Author</label>
            <input name='author' value={update.author} onChange={inputHandle} type="text" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 inputTag">
            <label htmlFor="exampleInputPassword1" className="form-label">Review</label>
            <textarea name='review' value={update.review} onChange={inputHandle} className="form-control" placeholder="Type your review here" id="floatingTextarea2" style={{height:"100px"}}></textarea>
        </div>
        <div className='mb-3 inputTag'>
        <FileBase multiple={false} value={update.selectedFile}  onDone={({ base64 }) => setUpdate({ ...update, selectedFile: base64 })} />
        </div>
        <div>
        </div>
        <button type="submit" className="btn btn-secondary" onClick={handleUpdation}>UPdate My Review</button>
        </form>
    </div>
  )
}

export default UpdateView