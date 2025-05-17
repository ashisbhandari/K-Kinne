import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { 
    HiOutlineShoppingBag,
    HiOutlineUser,
    HiBars3BottomRight
 } from "react-icons/hi2";
import Searchbar from './Searchbar';
import CartDrawer from '../Layout/CartDrawer';
const Navbar = () => {
    const [drawerOpen,setDrawerOpen]=useState(false);


    const toogleCartDrawer = () =>{
        setDrawerOpen(!drawerOpen);
    };


  return (
    <>
        <nav className='container mx-auto flex items-center justify-between py-4 px-6'>
            {/**LEFT-logo */}
            <div>
                <Link to="/" className="text-2xl font-medium">
                K Kinne
                </Link>
            </div>
            {/* center-nav */}
            <div className="hidden md:flex space-x-6 ">
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                    MEN
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                    WOMEN
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                    TOP WARE
                </Link>
                <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
                    BOTTOM WARE
                </Link>
            </div>
            {/* right-sections */}
            <div className="flex items-center space-x-4">
                {/* user-icon hai */}
                <Link to="/profile" className='hover:text-black'>
                    <HiOutlineUser  className='h-6 text-gray-700'/>
                </Link>
                {/* bag icon hai */}
                <button onClick={toogleCartDrawer} className='relative hover:text-black'>
                    <HiOutlineShoppingBag className='h-9 w-6 text-gray-700'/>
                    <span className='absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5'>5</span>
                </button>
                {/* search */}
                <div className="overflow-hidden">
                    <Searchbar /> 
                </div>
               
                <button className='md:hidden'>
                    <HiBars3BottomRight className='h-6 w-6 text-gray-700'/>
                </button>
            </div>
        </nav>
        <CartDrawer drawerOpen={drawerOpen} toogleCartDrawer={toogleCartDrawer} />
    </>
  )
}

export default Navbar
