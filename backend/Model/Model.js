import mongoose from "mongoose";

const viewSchema = mongoose.Schema({
    title: String,
    author: String,
    review: String,
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

const BookView = mongoose.model("BookyView",viewSchema);
export default BookView;