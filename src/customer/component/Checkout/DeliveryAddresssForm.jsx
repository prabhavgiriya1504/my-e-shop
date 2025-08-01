import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "./AddressCard";
import { useNavigate } from "react-router-dom";



const DeliveryAddresssForm = () => {
const navigate = useNavigate();
const handleDeliveryAdress = () => {
  navigate("/checkout?step=2");
}
  const handleSubmit = (e) => {
    e.preventDefault();
   const data = new FormData(e.currentTarget);
   
   const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zip"),
      phone: data.get("phoneNumber")
   }
   console.log("address is sent to servr......");
  }
  return (
    <div>
      <Grid container spacing={4}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md w-[40vw] h-[30.5rem] overflow-y-scroll"
        >
          <div className=" p-5 py-7 border-b cursor-pointer ">
            <AddressCard />
            <Button
              onClick={handleDeliveryAdress}
              sx={{ mt: 2, bgcolor: "#aaaaaa" }}
              variant="contained"
              size="large"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-m shadow-md p-5 flex flex-row ">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
              </Grid>

              <Grid container xs={12} className="my-3">
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  multiline
                  rows={4}
                  autoComplete="given-name"
                />
              </Grid>

              <Grid container spacing={3} className="my-3">
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip / Postal Code"
                    fullWidth
                    autoComplete="shipping postal-code"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    label="Phone Number "
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>
              </Grid>
               <Button
              sx={{ mt: 2, bgcolor: "#f51b09" }}
              variant="contained"
              size="large"
              fullWidth
              type="submit"
            >
              Deliver Here
            </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddresssForm;
