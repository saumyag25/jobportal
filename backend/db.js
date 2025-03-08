import mongoose from "mongoose"
const connectDB = async()=>{
    try{
         await mongoose.connect(process.env.MONGo_URI);
         console.log('mongodb connected successfully');
    }catch(error){
        console.log(error);
    }
}
export default connectDB;