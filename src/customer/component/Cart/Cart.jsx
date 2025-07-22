import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../../State/Cart/Action';
import { store } from '../../../State/store';

const Cart = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const {cart} = useSelector(store=>store);
    const handleCheckOut = () => {
        navigate("/checkout?step=1");
    }

    useEffect(()=>{
       dispatch(getCart())
    },[cart.deleteCartItem , cart.updateCartItem])
  return (
     
        <div className='lg:grid grid-cols-3 lg:px-16 relative'>

            <div className='col-span-2'>
              {cart.cart?.cartItem.map((item) => <CartItem item={item} />)}
            </div>
            <div className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0'>
                <div className="border">
                    <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
                    <hr />
                    <div className='space-y-3 font-semibold'>
                        <div className='flex justify-between pt-3 ml-1 mr-1 text-black'>
                            <span>Price</span>
                            <span>Rs.{cart.cart?.totalPrice}</span>
                        </div>
                        <div className='flex justify-between ml-1 mr-1 pt-3 text-black'>
                            <span>Discount</span>
                            <span className='text-green-600'>Rs.{cart.cart?.discount}</span>
                        </div>
                        <div className='flex justify-between ml-1 mr-1 pt-3 text-black'>
                            <span>Delivery Charge</span>
                            <span className='text-green-600'>Rs.Free</span>
                        </div>
                        <div className='flex justify-between ml-1 mr-1 pt-3 text-black pb-6'>
                            <span className='font-bold'>Total Amount</span>
                            <span className='text-green-600 font-bold'>Rs.{cart.cart?.totalDiscountedPrice}</span>
                        </div>
                        <button
                        onClick={handleCheckOut}
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
               Check Out
              </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Cart
