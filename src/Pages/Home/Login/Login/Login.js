import {
    Alert,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
  } from "@mui/material";
  import { Box } from "@mui/system";
  import React, { useState } from "react";
  import { NavLink, useLocation, useHistory } from "react-router-dom";
  import login_img from "../../../../images/login001.jpg";
import useAuth from "../../../hooks/useAuth";
import Spinner from '../../../Shared/Spinner/Spinner'
  
  const Login = () => {
    const [logInData, setLogInData] = useState({});
    const { loginUser, user, authError, isLoading, signInWithGoogle } = useAuth();
  
    const location = useLocation();
    const history = useHistory();
  
    const handleOnChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLogInData = { ...logInData };
      newLogInData[field] = value;
      setLogInData(newLogInData);
    };
  
    const handleLoginSubmit = (e) => {
      loginUser(logInData.email, logInData.password, location, history);
      e.preventDefault();
    };
  
    // google sign in
    const handleGoogleSignIn = () => {
      signInWithGoogle(location, history);
    };
    return (
      <>
        <Box>
          <Container sx={{ my: 16 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid item xs={12} md={6}>
                  <img style={{ width: "100%" }} src={login_img} alt="" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Box>
                      <Typography
                        sx={{ fontSize: "20px", fontWeight: "bold", mb: 8 }}
                        variant="body1"
                      >
                        Login
                      </Typography>
                    </Box>
                    <Box>
                      {user?.email && (
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                          <Alert severity="success" color="info">
                            Login Successfully
                          </Alert>
                        </Box>
                      )}
                      {!isLoading && (
                        <form onSubmit={handleLoginSubmit}>
                          <TextField
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="outlined"
                            fullWidth
                            sx={{ mb: 2 }}
                          />
                          <TextField
                            label="Your Password"
                            name="password"
                            type="password"
                            onChange={handleOnChange}
                            variant="outlined"
                            fullWidth
                            autoComplete="current-password"
                          />
                          <Box sx={{textAlign: 'center'}}>
                            <Button
                              sx={{ px: 3, py: 1, width: "75%", mt: 5 }}
                              style={{
                                backgroundColor: "#13D1D0",
                                color: "#fff",
                                textTransform: "uppercase",
                                textAlign: "center",
                              }}
                              type="submit"
                            >
                              Login
                            </Button>
                          </Box>
                          <br />
                          <NavLink
                            to="/register"
                            style={{ textDecoration: "none" }}
                          >
                            <Button size="small"> New User? Register </Button>
                          </NavLink>
                        </form>
                      )}
                      {isLoading && <Spinner />}
                      {authError && <Alert severity="error">{authError}</Alert>}
                      <p>---------------------</p>
                      <Button onClick={handleGoogleSignIn} variant="outlined">
                        Google SignIn
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </>
    );
  };
  
  export default Login;