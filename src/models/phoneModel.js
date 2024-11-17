import mongoose from "mongoose";

const phoneSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})

const phones = mongoose.model("phoneProducts",phoneSchema);

export default phones;