import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';

const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick={()=> navigate(`/account/order/${5}`)} className='p-5 shadow-lg hover:shadow-2xl border mr-1'>
           
           <Grid container spacing={2} sx={{justifyContent: "space-evenly"}}>
              
              <Grid item xs={6}>
                 <div className='flex cursor-pointer'>
                    <img className='w-[5rem] h-[5rem] object-cover object-top' src='https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70' alt='' />
                    <div className='ml-5 space-y-2'>
                        <p className=''>Men slim , fit designer kurta...</p>
                        <p className='opacity-50 text-xs font-semibold'>Size , M</p>
                         <p className='opacity-50 text-xs font-semibold'>Color , Green</p>
                        
                    </div>
                 </div>
              </Grid>

              <Grid item xs={2}>
                 <p>Rs.199</p>
              </Grid>
              <Grid item xs={4}>
                  {true &&  <div>
                    <p>
                    <AdjustIcon sx={{width: "15px" , height: "15px"}} className='text-green-600 mr-2 text-sm'/>
                    <span>Delivered on --- May 30 , 2025</span>
                  </p>
                  <p style={{fontSize: "10px"}}>Your product has been delivered</p>
                  </div>}

                  {false && <p>
                    <AdjustIcon />
                    <span>Expected delivery on --- May 30 , 2025</span>
                  </p>}
              </Grid>
           </Grid>
    </div>
  )
}

export default OrderCard
