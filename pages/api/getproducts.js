// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  try {
    let products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// const handler = async (req, res)=>{
//     let products = await Product.find()

//     res.status(200).json({ products })
// }

export default connectDb(handler);
