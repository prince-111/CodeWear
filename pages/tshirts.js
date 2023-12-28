import Link from "next/link";
import React from "react";
import mongoose from "mongoose";
import Product from "@/models/Product";

const Tshirts = ({ products, message }) => {
  // console.log(products);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {products.map((item)=>{
            return<div key={item._id} className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
              <div className="block relative rounded overflow-hidden">
                <Link passHref={true} key={item._id}  href={`/product/${item.slug}`}>
                  <img
                    alt="ecommerce"
                    className="m-auto md:mx-0 h-[40vh] md:h-[46vh] block"
                    src={item.img}
                    // "https://m.media-amazon.com/images/I/61L61b1uOhL._SY879_.jpg"
                  />
                </Link>
              </div>
              <div className="mt-4 text-center md:text-left">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  T-Shirts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  {item.title}
                </h2>
                <p className="mt-1">₹{item.price}</p>
                <p className="mt-1">{item.size}</p>
              </div>
            </div>
          })} 
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URL)
  }
  let products = await Product.find({category: 'tshirt'})
  // console.log(products)
  return {
    props: {products: JSON.parse(JSON.stringify(products))},
  }
}

export default Tshirts;
