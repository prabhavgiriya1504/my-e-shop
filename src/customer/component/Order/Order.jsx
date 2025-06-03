import { Grid } from '@mui/material'
import React from 'react'
import OrderCard from './OrderCard'

const Order = () => {
    const ordeStatus = [
        {label: "On The Way" , value: "on_the_way"},
        {label: "Delivered" , value: "delivered"},
        {label: "Cancelled" , value: "cancelled"},
        {label: "Returned" , value: "returned"},
    ]
  return (
    <div>
      <Grid container sx={{justifyContent:"space-between"}}>
        <Grid item xs={2.5} sx={{width: "15%"}}>
            <div className='h-auto shadow-lg  bg-white ml-5 p-5 sticky top-5'> 
                 <h1 className='font-bold text-lg'>Filter</h1>
                 <div className="space-y-4 mt-10">
                    <h1 className='font-semibold'>ORDER STATUS</h1>

                    {ordeStatus.map((option) => <div className='flex items-center'>
                        <input defaultValue={option.value} type='checkbox' className='h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-300' />
                        <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                            {option.label}
                        </label>
                    </div>)}
                 </div>
            </div>
        </Grid>

        <Grid item xs={9} sx={{width: "80%", marginTop: 4}}>

            <OrderCard />
        </Grid>

        
      </Grid>
    </div>
  )
}

export default Order
