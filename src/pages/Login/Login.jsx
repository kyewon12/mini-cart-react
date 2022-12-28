import {
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    TextField,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import GoogleButton from '../../api/GooglButton';
import SignInPage from '../../api/GooglButton';

function Login() {
    return (
        <Container maxWidth="xs">
            <div
                style={{
                    // background: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100vh', //화면정중앙시 필수!!
                    justifyContent: 'center',
                }}
            >
                <TextField
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    required
                ></TextField>
                <TextField
                    label="Password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    required
                ></TextField>
                <FormControlLabel
                    control={
                        <Checkbox value="remember" color="primary"></Checkbox>
                    }
                    label="Remember me"
                ></FormControlLabel>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ width: '200px', height: '50px' }}
                >
                    SIGN-IN
                </Button>
                <Grid container>
                    {/*행 - container */}
                    <Grid item xs>
                        {/*지정된 컬럼이 빈공간을 가지게 된다. */}
                        {/*열 -item*/}
                        <Link>Forgot password?</Link>
                    </Grid>
                    <Grid>
                        <Link>Sign up</Link>
                    </Grid>
                </Grid>
                <div style={{padding:'20px 20px'}}>
                    <GoogleButton />
                </div>
            </div>
        </Container>
    );
}

export default Login;
