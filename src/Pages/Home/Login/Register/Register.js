import { Alert, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Spinner from '../../../Shared/Spinner/Spinner';
import register_img from '../../../../images/login001.jpg'
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [logInData, setLogInData] = useState({});
    const {registerUser, isLoading, user, authError} = useAuth();
    const history = useHistory();


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLogInData = {...logInData};
        newLogInData[field] = value;
        setLogInData(newLogInData);
    }

    const handleLoginSubmit = e => {
        if(logInData.password !== logInData.password2){
            alert('Your password did not match');
            return
        }
        registerUser(logInData.email, logInData.password, logInData.name, history)
        e.preventDefault();
    }
    return (
        <>
            <Box>
                <Container sx={{my: 16}}>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container spacing={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <Grid item xs={12} md={6}>
                                <img style={{width: '100%'}} src={register_img} alt="" />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box>
                                    <Box>
                                        <Typography sx={{fontSize: '20px', fontWeight: 'bold', mb: 8}} variant='body1'>
                                            Register
                                        </Typography>
                                    </Box>
                                    <Box>
                                        {
                                            authError && <Alert severity="error">{authError}</Alert>
                                        }
                                        {
                                            user?.email &&
                                            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                                <Alert severity="success" color="info">
                                                    Register Successfully
                                                </Alert>
                                            </Box>
                                        }
                                        {
                                            !isLoading &&
                                            <form onSubmit={handleLoginSubmit}>
                                                <TextField 
                                                    label="Full Name"
                                                    name="name"
                                                    onBlur={handleOnBlur}
                                                    variant="standard"
                                                    sx={{mb: 2}}
                                                    fullWidth
                                                />
                                                <TextField 
                                                    label="Your Email"
                                                    name="email"
                                                    type="email"
                                                    onBlur={handleOnBlur}
                                                    variant="standard"
                                                    sx={{mb: 2}} 
                                                    fullWidth
                                                />
                                                <TextField
                                                    label="Your Password"
                                                    name="password"
                                                    type="password"
                                                    onBlur={handleOnBlur}
                                                    variant="standard"
                                                    sx={{mb: 2}}
                                                    fullWidth 
                                                    autoComplete="current-password"
                                                />
                                                <TextField
                                                    label="Confirm Password"
                                                    name="password2"
                                                    type="password"
                                                    onBlur={handleOnBlur}
                                                    variant="standard"
                                                    fullWidth
                                                    autoComplete="current-password"
                                                />
                                                <Box sx={{textAlign: 'center'}}>
                                                    <Button 
                                                        sx={{px: 3, py: 1, width: '75%', mt: 5}} 
                                                        style={{backgroundColor: '#13D1D0', color: '#fff', textTransform: 'capitalize'}}
                                                        type="submit"
                                                        > Register 
                                                    </Button> 
                                                </Box>
                                                <br />
                                                <NavLink to="/login" style={{textDecoration: 'none'}}>
                                                    <Button size="small"> Already Registered? Login </Button>
                                                </NavLink>
                                            </form>
                                        }
                                        {
                                            isLoading && <Spinner/>
                                        }
                                        
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

export default Register;