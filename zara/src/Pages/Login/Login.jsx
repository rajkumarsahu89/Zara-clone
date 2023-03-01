import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import { useDispatch, useSelector } from 'react-redux';
import { Grid, GridItem, useToast ,Center} from '@chakra-ui/react';
import { authLogin } from '../../Redux/auth/actions';

const Login = () => {
    const [loginData, setLoginData] = React.useState({ email: '', password: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    }
    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();

    const { userLogin: { loading, error, message }, data: { isAuthenticated, token, user } } = useSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            toast({
                title: `Welcome ${user.name}`,
                description: "Your account is created",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
            let time = setTimeout(() => {
                navigate("/");
            }, 3000);
            return () => clearTimeout(time);
        }
        if (error) {
            toast({
                title: message,
                description: 'Please try again',
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    }, [isAuthenticated, error]);
    return (
        <> <Center w="100vw">
            <Grid className='main'>

                <GridItem className='block1'  width="70%">
                    <div className='h1'>LOG IN</div>
                    <input type="text" name='email' placeholder='E-MAIL' value={loginData.email} onChange={handleChange} /><br />
                    <input type="text" name='password' placeholder='PASSWORD' value={loginData.password} onChange={handleChange} /><br />
                    <p style={{fontSize:"10px"}}>HAVE YOU FORGOTTEN YOUR PASSWORD?</p><br /><br />
                    <button onClick={() => dispatch(authLogin(loginData))}>LOG IN</button>
                </GridItem>
                <GridItem className='block2' width={"70%"} >
                    <h1 className='h2'>REGISTER</h1><br />
                    <h4>IF YOU STILL DON'T HAVE A <span style={{ fontWeight: "bolder" }}>ZARA.COM</span>  ACCOUNT, USE THIS OPTION TO ACCESS THE REGISTRATION FORM.</h4><br />
                    <h4>BY GIVING US YOUR DETAILS, PURCHASING IN <span style={{ fontWeight: "bolder" }}>ZARA.COM</span> WILL BE FASTER AND AN ENJOYABLE EXPERIENCE.</h4><br /><br />
                    <Link to='/register'><button style={{width:"100%",marginTop:"30px"}}>CREATE ACCOUNT</button></Link>
                </GridItem>
            </Grid>
            </Center>
            <Center w="100vw">
            <div className='bottom'>
                <Grid className='projects_grid'>  
                <GridItem >
                    <h3> HELP</h3>
                    <p>SHOP AT ZARA.COM</p>
                    <p>PRODUCT</p>
                    <p>GIFT CARD</p>
                    <p>PAYMENT</p>
                    <p>SHIPPING</p>
                    <p>EXCHANGES AND RETURNS</p>
                    <p>SHOPS AND COMPANY</p>
                    <p>CLOTHES COLLECTION PROGRAMME</p>
                    <p>MY ACCOUNT</p>
                </GridItem>
                <GridItem>
                    <h3>FOLLOW US</h3>
                    <p>NEWSLETTER</p>
                    <p>INSTAGRAM</p>
                    <p>FACEBOOK</p>
                    <p>TWITTER</p>
                    <p>PINTREST</p>
                    <p>YOUTUBE</p>
                </GridItem>
                <GridItem>
                    <h3>COMPANY</h3>
                    <p>ABOUT US</p>
                    <p>JOIN LIFE</p>
                    <p>OFFICES</p>
                    <p>STORIES</p>
                    <p>WORK WITH US</p>
                </GridItem>
                <GridItem>
                    <h3>POLICIES</h3>
                    <p>PRIVACY POLICY</p>
                    <p>PURCHASING CONDITIONS</p>
                    <p>GIFT CARD CONDITIONS</p>
                    <p>COOKIES SETTINGS</p>
                </GridItem>
                </Grid>
            </div>
            
            </Center >
            <Center width="100vw">
                <Grid className='main' >
            <GridItem className='line'>
                <p>INDIA</p>
                <p>ENGLISH  © ALL RIGHTS RESERVED</p>
            </GridItem>
            <GridItem className='bot2'>
                <p>NAME AND ADDRESS OF THE MANUFACTURER:</p>
                <p>INDUSTRIA DE DISEÑO TEXTIL, S.A. (INDITEX, S.A.)</p>
                <p>AVENIDA DE LA DIPUTACIÓN, EDIFICIO INDITEX, 15143, ARTEIXO (A CORUÑA), SPAIN</p>
            </GridItem>
            </Grid>
            </Center>
        </>
    )
}

export default Login