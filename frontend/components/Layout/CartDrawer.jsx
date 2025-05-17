import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";

const CartDrawer = ({drawerOpen,toogleCartDrawer}) => {
    
  return <div className={`fixed top-0 right-0 w-3/4 sm:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${drawerOpen ? "transform-x-0" : "translate-x-full"}`}>
    {/**close btn */}
    <div className="flex justify-end p-4">
        <button onClick={toogleCartDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
        </button>
    </div>
    {/* scrollabel cart content/ */}
    <div className="flexx-grow  p-4 overflow-y-auto">
        <h1 className='text-xl font-semibold mb-4'>Your Cart</h1>
        {/* components for cart */}
    </div>

    {/* checkout button fixed at btn  */}
    <div className="p-4 bg-white sticky bottom-0">
        <button className='w-full bg-black text-white py-3'>
            checkout
        </button>
        <p>
            Shipping taxes and discount codes calculated at checkout.
        </p>
    </div>
  </div>
}

export default CartDrawer
