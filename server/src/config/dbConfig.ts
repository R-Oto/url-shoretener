import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const connect = await mongoose.connect(`${process.env.ATLAS}`)
        console.log('connected: ', connect.connection.name)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}