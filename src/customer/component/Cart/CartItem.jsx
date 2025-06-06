import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center mt-4 border ">
        <div className="w-[5rem] h-[5rem] lg:w[9rem] lg-h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Men slim kurta designer!</p>
          <p className="opacity-70">Size L , White</p>
          <p className="opacity-70 mt-2"> Seller: christaliyo 2 fashion</p>
          <div className="flex space-x-5 items-center text-gray-900 mt-6 pt-6">
            <p className="font-semibold">Rs.199</p>
            <p className="opacity-50 line-through">Rs.220</p>
            <p className="text-green-600 font-semibold">5% Off</p>
          </div>
        </div>
        
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2">
            <IconButton>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">2</span>
              <IconButton>
                <AddCircleOutlineIcon />
              </IconButton>
            
            <Button>Remove</Button>
          </div>
        </div>
    </div>
  );
};

export default CartItem;
