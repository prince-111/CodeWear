import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import logo from "../images/codechic logo.png"

const Navbar = () => {
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
          <div className="cart absolute right-0 top-1 mx-5">
            <RiShoppingCart2Line className="text-xl md:text-2xl"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar