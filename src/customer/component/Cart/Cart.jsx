import React from 'react'
import CartItem from './CartItem'

const Cart = () => {
  return (
     
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>

            <div className='col-span-2'>
              {[1,1,1,1].map((item) => <CartItem />)}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                <div className="border">
                    <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
                    <hr />
                    <div className='space-y-3 font-semibold'>
                        <div className='flex justify-between pt-3 ml-1 mr-1 text-black'>
                            <span>Price</span>
                            <span>Rs.4467</span>
                        </div>
                        <div className='flex justify-between ml-1 mr-1 pt-3 text-black'>
                            <span>Discount</span>
                            <span className='text-green-600'>Rs.-3217</span>
                        </div>
                        <div className='flex justify-between ml-1 mr-1 pt-3 text-black'>
                            <span>Delivery Charge</span>
                            <span className='text-green-600'>Rs.50</span>
                        </div>
                        <div className='flex justify-between ml-1 mr-1 pt-3 text-black pb-6'>
                            <span className='font-bold'>Total Amount</span>
                            <span className='text-green-600 font-bold'>Rs.300</span>
                        </div>
                        <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Pay Now
              </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Cart
