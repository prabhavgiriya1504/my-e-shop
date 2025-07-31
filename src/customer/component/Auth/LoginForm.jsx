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

           console.log("user data from login form is sent to server");

           
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3} className="flex justify-center items-center">
          
          <Grid item xs={12} className="w-[70vw] md:w-full">
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          
          
          <Grid item xs={12} className="w-[70vw] md:w-full">
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12} className="w-[70vw] md:w-full">
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








// import { TextField, Button, Grid, Typography } from "@mui/material"; // Added Typography for potential use
// import { useNavigate } from 'react-router-dom'; // Assuming you have useNavigate

// // Make sure you have the handleSubmit function defined in your component
// // And integrate it with state management for email/password

// const LoginForm = ({ handleSubmit }) => { // Assuming LoginForm is your component
//   const navigate = useNavigate();

//   // You would typically have state hooks for email and password,
//   // and a handleSubmit function that dispatches an action (e.g., to Redux)
//   // For example:
//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   console.log('Login attempt with:', { email, password });
//   //   // Dispatch your login action here
//   // };


//   return (
//     <div>
//       {/* Optional: Add a title for the form */}
//       <Typography variant="h5" sx={{ mb: 3, textAlign: 'center' }}>
//         Login
//       </Typography>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={3}>
//           {/* Email Field */}
//           <Grid item xs={12} sm={8} md={6} lg={5} sx={{ mx: 'auto' }}>
//             <TextField
//               required
//               id="email"
//               name="email"
//               label="Email"
//               fullWidth
//               autoComplete="email"
//               // You'd typically add value and onChange props here
//               // value={email}
//               // onChange={(e) => setEmail(e.target.value)}
//             />
//           </Grid>
//           {/* Password Field */}
//           <Grid item xs={12} sm={8} md={6} lg={5} sx={{ mx: 'auto' }}>
//             <TextField
//               required
//               id="password"
//               name="password"
//               label="Password"
//               type="password" // Important for password fields
//               fullWidth
//               autoComplete="current-password" // More specific for login
//               // You'd typically add value and onChange props here
//               // value={password}
//               // onChange={(e) => setPassword(e.target.value)}
//             />
//           </Grid>
//           {/* Login Button */}
//           <Grid item xs={12} sm={8} md={6} lg={5} sx={{ mx: 'auto' }}>
//             <Button
//               className="bg-[#9155FD] w-full"
//               type="submit"
//               variant="contained"
//               size="large"
//               sx={{ padding: ".8rem 0" }}
//             >
//               Login
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//       <div className="flex justify-center items-center mt-4"> {/* Added mt-4 for spacing */}
//         <div className="py-3 flex items-center">
//           <p className="text-sm text-gray-700">Don't have an account?</p> {/* Improved text */}
//           <Button onClick={() => navigate("/register")} className="ml-2" size="small" sx={{ textTransform: 'none' }}> {/* Adjusted ml and added textTransform */}
//             Register
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
