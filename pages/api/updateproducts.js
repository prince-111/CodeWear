import Product from "@/models/Product";
import connectDb from "@/middleware/mongoose";

const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      for (let i = 0; i < req.body.length; i++) {
        try {
          // Assuming each product has a unique _id
          let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);

          if (!p) {
            console.error(`Product with _id ${req.body[i]._id} not found.`);
            res.status(404).json({ error: "Not Found", message: `Product with _id ${req.body[i]._id} not found.` });
            return; // Stop processing if a product is not found
          }
        } catch (updateError) {
          console.error(`Error updating product with _id ${req.body[i]._id}:`, updateError);
          res.status(500).json({ error: "Internal Server Error", message: `Failed to update product with _id ${req.body[i]._id}` });
          return; // Stop processing if an error occurs during update
        }
      }
      res.status(200).json({ success: "Products updated successfully" });
    } catch (error) {
      console.error("Error processing products:", error);
      res.status(500).json({ error: "Internal Server Error", message: "Failed to update products" });
    }
  } else {
    res.status(400).json({ error: "This method is not allowed" });
  }
};

export default connectDb(handler);








// import Product from "@/models/Product";
// import connectDb from "@/middleware/mongoose";

// const handler = async (req, res) => {
//   if (req.method === "POST") {
//     // console.log(req.body)
//     for (let i = 0; i < req.body.length; i++) {
//       let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i]);
//     }
//     res.status(200).json({ success: "Success" });
//   } else {
//     res.status(400).json({ error: "This method is not allowed" });
//   }
// };
// export default connectDb(handler);
