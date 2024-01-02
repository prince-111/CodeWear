import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoCloseCircle } from "react-icons/io5";
import logo from "../../images/codechic logo.png";
import { FaCartShopping, FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { IoBagCheck } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({
  logout,
  user,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  // console.log(cart, addToCart, removeFromCart, clearCart, subTotal)

  const [dropdown, setDropdown] = useState(true);

  console.log(Object.keys(cart), "Object.keys");

  const toggleCart = () => {
    // const cartClassList = ref.current.classList;

    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();

  return (
    <div>
      <div className="flex flex-col md:flex-row  md:justify-start justify-center items-center py-2 shadow-md  sticky top-0 bg-white z-10">
        <div className="logo mr-auto md:mx-5">
          <Link href={"/"}>
            {" "}
            <Image src={logo} width={200} height={40} alt="PreShoping" />{" "}
          </Link>
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-6 font-bold md:text-md">
            <Link href={"/tshirts"}>
              <li className="hover:text-purple-500">Tshirt</li>
            </Link>
            <Link href={"/hoodies"}>
              <li className="hover:text-purple-600">Hoodies</li>
            </Link>
            <Link href={"/sticker"}>
              <li className="hover:text-purple-700">Stickers</li>
            </Link>
            <Link href={"/mug"}>
              <li className="hover:text-purple-700">Mugs</li>
            </Link>
          </ul>
        </div>

        <div>
          <div className="cursor-pointer items-center cart absolute right-0 top-4 mx-5 flex">
            <span
              onMouseOver={() => {
                setDropdown(true);
              }}
              onMouseLeave={() => setDropdown(false)}
            >
              {dropdown && (
                <span
                  onMouseOver={() => {
                    setDropdown;
                  }}
                  onMouseLeave={() => {
                    setDropdown(false);
                  }}
                  className="absolute right-5 bg-white shadow-lg border top-6 py-2 rounded-md px-5 w-32"
                >
                  <ul>
                    <Link href="/myaccount">
                      <li className="py-1 hover:text-pink-700 text-sm font-bold">
                        My Account
                      </li>
                    </Link>
                    <Link href="/orders">
                      <li className="py-1 hover:text-pink-700 text-sm font-bold">
                        Orders
                      </li>
                    </Link>
                    <li
                      onClick={logout}
                      className="py-1 hover:text-pink-700 text-sm font-bold"
                    >
                      LogOut
                    </li>
                  </ul>
                </span>
              )}

              {user.value && (
                <MdAccountCircle className="text-xl md:text-2xl mx-2" />
              )}
            </span>
            {!user.value && (
              <Link href={"/login"}>
                <button className="bg-pink-600 px-2 py-1 rounded-md text-sm text-white mx-2">
                  Login
                </button>
              </Link>
            )}
            <FaCartShopping
              onClick={toggleCart}
              className="text-xl md:text-2xl"
            />
          </div>

          {/* sideCart */}
          <div
            ref={ref}
            className={`w-72 h-[100vh] sideCart overflow-y-scroll absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform ${
              Object.keys(cart).length === 0
                ? "translate-x-full"
                : "translate-x-0"
            } z-10`}
          >
            <h2 className="font-bold text-xl text-center">Shoping Cart</h2>
            <span
              onClick={toggleCart}
              className="cursor-pointer absolute top-5 right-2 text-2xl text-pink-500"
            >
              <IoCloseCircle />
            </span>

            <ol className="list-decimal font-semibold">
              {Object.keys(cart).length == 0 && (
                <div className="my-4 font-semibold">No Items Yet</div>
              )}
              {Object.keys(cart).map((k) => {
                return (
                  <li key={k}>
                    <div className="item flex my-5">
                      <div className="w-2/3 font-semibold">
                        {cart[k].name}({cart[k].size}/{cart[k].variant})
                      </div>
                      <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                        {" "}
                        <FaCircleMinus
                          onClick={() => {
                            removeFromCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].name,
                              cart[k].size,
                              cart[k].variant
                            );
                          }}
                          className="cursor-pointer text-pink-500"
                        />{" "}
                        <span className="mx-2">{cart[k].qty}</span>{" "}
                        <FaCirclePlus
                          onClick={() => {
                            addToCart(
                              k,
                              1,
                              cart[k].price,
                              cart[k].name,
                              cart[k].size,
                              cart[k].variant
                            );
                          }}
                          className="cursor-pointer text-pink-500"
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="font-bold my-2">Subtotal: ₹{subTotal}</div>

            <div className="flex">
              <Link href={"/checkout"}>
                <button className="flex mx-auto mr-2 text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-md">
                  <span className="m-1">
                    <IoBagCheck />{" "}
                  </span>{" "}
                  CheckOut
                </button>
              </Link>

              <button
                onClick={clearCart}
                className="flex mx-auto mr-2 text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-md"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
