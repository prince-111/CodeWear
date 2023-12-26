"use client";

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { IoCloseCircle } from "react-icons/io5";
import logo from "../images/codechic logo.png"
import {FaCartShopping, FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { IoBagCheck } from "react-icons/io5";

const Navbar = () => {
  
  const ref = useRef()

  const toggleCart = () =>{
    const cartClassList = ref.current.classList;

   if (cartClassList.contains('translate-x-full')) {
      cartClassList.remove('translate-x-full');
      cartClassList.add('translate-x-0');
    } else if (!cartClassList.contains('translate-x-full')) {
      cartClassList.remove('translate-x-0');
      cartClassList.add('translate-x-full');
    }
  };

  return (
    <div>
      <div className='flex flex-col md:flex-row  md:justify-start justify-center items-center py-2 shadow-md'>
        <div className='logo mx-5'> 
        <Link href={"/"}> <Image src={logo} width={200} height={40} alt="PreShoping" /> </Link>
        </div>
        <div className="nav">
          <ul className='flex items-center space-x-6 font-bold md:text-sm'>
            <Link href={"/T-shirts"}><li>Tshirt</li></Link>
            <Link href={'/hoodies'}><li>Hoodies</li></Link>
            <Link href={'/sticker'}><li>Stickers</li></Link>
            <Link href={'/mug'}><li>Mugs</li></Link>
          </ul>
        </div>
        <div>
          <div onClick={toggleCart} className="cursor-pointer cart absolute right-0 top-4 mx-5">
            <FaCartShopping className="text-xl md:text-2xl"/>
          </div>
          
          <div ref={ref} className="w-72 h-full sideCart absolute top-0 right-0 bg-pink-100 px-8 py-10 transform transition-transform translate-x-full">
            <h2 className='font-bold text-xl text-center'>Shoping Cart</h2>
            <span onClick={toggleCart} className="cursor-pointer absolute top-5 right-2 text-2xl text-pink-500"><IoCloseCircle /></span>

          <ol className='list-decimal font-semibold'>
            <li>
              <div className='item flex my-5'>
              <div className='w-2/3 font-semibold'>tshirt Wear</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-lg'> <FaCircleMinus className="cursor-pointer text-pink-500" /> <span className='mx-2'>1</span> <FaCirclePlus className="cursor-pointer text-pink-500" /></div>
              </div>
              </li>
            <li>
              <div className='item flex my-5'>
              <div className='w-2/3 font-semibold'>tshirt Wear</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-lg'> <FaCircleMinus className="cursor-pointer text-pink-500" /> <span className='mx-2'>1</span> <FaCirclePlus className="cursor-pointer text-pink-500" /></div>
              </div>
              </li>
            <li>
              <div className='item flex my-5'>
              <div className='w-2/3 font-semibold'>tshirt Wear</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-lg'> <FaCircleMinus className="cursor-pointer text-pink-500" /> <span className='mx-2'>1</span> <FaCirclePlus className="cursor-pointer text-pink-500" /></div>
              </div>
              </li>
            <li>
              <div className='item flex my-5'>
              <div className='w-2/3 font-semibold'>tshirt Wear</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-lg'> <FaCircleMinus className="cursor-pointer text-pink-500" /> <span className='mx-2'>1</span> <FaCirclePlus className="cursor-pointer text-pink-500" /></div>
              </div>
              </li>
            <li>
              <div className='item flex my-5'>
              <div className='w-2/3 font-semibold'>tshirt Wear</div>
              <div className='flex font-semibold items-center justify-center w-1/3 text-lg'> <FaCircleMinus className="cursor-pointer text-pink-500" /> <span className='mx-2'>1</span> <FaCirclePlus className="cursor-pointer text-pink-500" /></div>
              </div>
              </li>
          </ol>
          <button className="flex mx-auto mt-16 text-white bg-pink-400 border-0 py-2 px-6 focus:outline-none hover:bg-pink-500 rounded text-md"><span className='m-1'><IoBagCheck /> </span> CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar