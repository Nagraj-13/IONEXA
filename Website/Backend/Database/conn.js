import mongoose from "mongoose";
const MONGODB_URL = 'MONGODBURL'
const connectDB = async () =>{
    try{
       const conn = await mongoose.connect(MONGODB_URL)
            console.log("Connected to MongoDB")
        }catch(error){
            console.log(`MongoDB error : ${error}`)
    }
}

export default connectDB