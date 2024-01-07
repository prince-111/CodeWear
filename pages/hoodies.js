import Link from "next/link";
import React from "react";
import mongoose from "mongoose";
import Product from "@/models/Product";

const Hoodies = ({ products, message }) => {
  // console.log(products);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {Object.keys(products).length === 0 && (
              <p>
                Sorry all the Hoodies are nto currently out of stock. New stock
                coming soon, Stay Tuned!
              </p>
            )}
            {Object.keys(products).map((item) => {
              return (
                <div
                  key={products[item]._id}
                  className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5"
                >
                  <div className="block relative rounded overflow-hidden">
                    <Link
                      passHref={true}
                      key={products[item]._id}
                      href={`/product/${products[item].slug}`}
                    >
                      <img
                        alt="ecommerce"
                        className="m-auto md:mx-0 h-[40vh] md:h-[46vh] block"
                        src={products[item].img}
                        // "https://m.media-amazon.com/images/I/61L61b1uOhL._SY879_.jpg"
                      />
                    </Link>
                  </div>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      Hoodies
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {products[item].title}
                    </h2>
                    <p className="mt-1">₹{products[item].price}</p>
                    {/* <p className="mt-1">{products[item].size}</p> */}
                    <div className="mt-1">
                      {products[item].size.includes("S") && (
                        <span className="border  border-gray-300 px-1 mx-1">
                          S
                        </span>
                      )}
                      {products[item].size.includes("M") && (
                        <span className="border  border-gray-300 px-1 mx-1">
                          M
                        </span>
                      )}
                      {products[item].size.includes("L") && (
                        <span className="border  border-gray-300 px-1 mx-1">
                          L
                        </span>
                      )}
                      {products[item].size.includes("XL") && (
                        <span className="border  border-gray-300 px-1 mx-1">
                          XL
                        </span>
                      )}
                      {products[item].size.includes("XXL") && (
                        <span className="border  border-gray-300 px-1 mx-1">
                          XXl
                        </span>
                      )}
                    </div>
                    <div className="mt-1">
                      {products[item].color.includes("red") && (
                        <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[item].color.includes("black") && (
                        <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[item].color.includes("green") && (
                        <button className="border-2 border-gray-300 ml-1 bg-green-900 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[item].color.includes("orange") && (
                        <button className="border-2 border-gray-300 ml-1 bg-orange-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                      {products[item].color.includes("blue") && (
                        <button className="border-2 border-gray-300 ml-1 bg-blue-900 rounded-full w-6 h-6 focus:outline-none"></button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL);
  }
  let products = await Product.find({ category: "hoods" });
  let hoods = {};
  for (let item of products) {
    if (item.title in hoods) {
      if (
        !hoods[item.title].color.includes(item.color) &&
        item.availableQty > 0
      ) {
        hoods[item.title].color.push(item.color);
      }
      if (
        !hoods[item.title].size.includes(item.size) &&
        item.availableQty > 0
      ) {
        hoods[item.title].size.push(item.size);
      }
    } else {
      hoods[item.title] = JSON.parse(JSON.stringify(item));
      if (item.availableQty > 0) {
        hoods[item.title].color = [item.color];
        hoods[item.title].size = [item.size];
      }
    }
  }
  // console.log(hoods)
  return {
    props: { products: JSON.parse(JSON.stringify(hoods)) },
  };
}

export default Hoodies;
