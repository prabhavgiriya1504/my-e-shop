import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../State/Auth/Action";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = (event) => {
           event.preventDefault();
           const data = new FormData(event.currentTarget);

           const userData = {
            email: data.get("email"),
            password: data.get("password")
           }

           dispatch(login(userData));

           console.log("user from login form ... ",userData);

           
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          
          <Grid item xs={12} className="w-full">
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12} className="w-full">
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12} className="w-full">
            <Button
              className="bg-[#9155FD] w-full"
              type="submit"
              variant="contained"
              size="large"
              sx={{ padding: ".8rem 0" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center items-center">
              <div className="py-3 flex items-center">
                <p>if you don't have account ? </p>
                <Button onClick={()=>navigate("/register")} className="ml-5" size="small">Register</Button>
              </div>
            </div>
    </div>
  );
};

export default LoginForm;
