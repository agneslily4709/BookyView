import BookView from "../Model/Model.js";
import mongoose from "mongoose";
export const createView = async(req,res) => {
    const {title,author,review,selectedFile,likeCount,createdAt} = req.body;
    const newView = new BookView({title,author,review,selectedFile,likeCount,createdAt});
    try {
        await newView.save();
        res.status(200).json(newView);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const getAllView = async(req,res)=>{
    try {
        const allData = await BookView.find();
        res.status(200).json(allData); 
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const getView = async (req,res) => {
    const {id} = req.params;
    try {
        const view =await BookView.findById(id);
        res.status(200).json(view);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const updateView = async(req,res) => {
    const {id} = req.params;
    const {title,author,review,selectedFile,likeCount,createdAt} = req.body;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({message:"no view is found with this id"})
    }
    else{
        const updated = {title,author,review,selectedFile,likeCount,createdAt,_id:id};
        await BookView.findByIdAndUpdate(id,updated,{new:true})
        res.status(202).json({message:"edited"})
    }
}

export const deleteView = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({message:"no view is found with this id"})
    }  
    else{
        await BookView.findByIdAndDelete(id);
        res.status(202).json({message:"deleted"})
    } 
}