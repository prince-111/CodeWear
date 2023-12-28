import mongoose from "mongoose";

const connectDb = handler => async (req, res) => {
   try {
     if (mongoose.connections[0].readyState) {
       return handler(req, res);
     }
 
     await mongoose.connect(process.env.MONGO_URL);
     const result = await handler(req, res);
     mongoose.connection.close(); // Close the connection after handling the request
     return result;
   } catch (error) {
     console.error("Error connecting to the database:", error);
     return res.status(500).json({ error: "Internal Server Error" });
   }
 };
 

// const connectDb = handler => async (req, res)=>{
//    if(mongoose.connections[0].readyState){
//     return handler(req, res)
//    }
//    await mongoose.connect(process.env.MONGO_URL)
//    return handler(req, res);
// }

export default connectDb;