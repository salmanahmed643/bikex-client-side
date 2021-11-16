import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Alert } from "@mui/material";

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = {email}
        fetch('https://enigmatic-ridge-10373.herokuapp.com/users/admin', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount) {
                console.log(data);
                setSuccess(true);
            }
        })
        e.preventDefault()
    }
    return (
        <>
          <Box>
              <Container>
                    <Box sx={{textAlign: 'center', mb: 2}}>
                        {success && <Alert severity="success"> Admin Add Successfully </Alert>}
                        <Typography variant="h4"> Make an Admin </Typography>
                    </Box>
                  <Box sx={{display: 'flex', justifyContent: "center", alignItems:"center"}}>
                    <form onSubmit={handleAdminSubmit}>
                        <TextField 
                            label="Email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="outlined"
                            placeholder="Make Admin"
                        /> <br />
                        <Button sx={{mt: 2}} type="submit" variant="outlined"> Make Admin </Button>
                    </form>
                  </Box>
              </Container>
          </Box>
        </>
    );
};

export default MakeAdmin;