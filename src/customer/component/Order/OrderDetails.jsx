import React from "react";
import AddressCard from "../Checkout/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { color } from "../Product/FilterData";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-10">Delivery Address</h1>
        <AddressCard />
      </div>
      <div>
        <OrderTracker activeStep={2} />
      </div>
{[1,1,1,1].map(() => <Grid container className="space-x-5">
        <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-around" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/y/c/x/xl-kast107hp-majestic-man-original-imafw49u5uty4agx-bb.jpeg?q=70"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">
                  {" "}
                  Men , slim mid-rise black jeans
                </p>
                <p className="space-x-5 opacity-50 text-xs">
                  <span>Color:White</span>
                  <span>Size:M</span>
                </p>
                <p>Seller , linaria</p>
                <p>Rs.1099</p>
              </div>
            </div>
          </Grid>

          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              <StarBorderIcon sx={{fontSize:"2rem"}} className="px-2"/>
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>
      </Grid>)}
      
    </div>
  );
};

export default OrderDetails;
