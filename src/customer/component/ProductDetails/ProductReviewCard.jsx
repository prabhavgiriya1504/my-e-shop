import { Avatar, Box, Grid, Rating } from '@mui/material';
import React from 'react';

const ProductReviewCard = () => {
    return (
        <div>
            <Grid container spacing={2} gap={3}>
                <Grid item xs={1}>
                    <Box>
                        <Avatar className='text-white' sx={{width: 56,height: 56,bgcolor:"#9155fd"}}>R</Avatar>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                      <p className='font-semibold text-lg'>Raaam</p>
                      <p className='opacity-70'>May 31 , 2025</p>
                    </div>
                </div>
                <Rating value={3.5} name="read-only" readOnly precision={0.5}/>
                <p>Lorem ipsum dolor sit amet, consectetur</p>
            </Grid>
        </div>
    )
}
export default ProductReviewCard;