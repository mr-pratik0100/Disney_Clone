
import React from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigete = useNavigate()
    return (
        <section className='container' >
            <div className='content'>
                <div className='login__disneyImg'>

                    <img className='login__img' src="/images/cta-logo-one.svg" alt="" />

                    <a onClick={()=>navigete('/home')} className='login__btn'>GET ALL HERE</a>
                    <p className='login__description'>Logging in to Disney+ (disneyplus.com login/begin) is simple and can be done from anywhere as long as you have a web browser open and logged in. Within minutes, your favorite device should automatically be connected to Disney+</p>
                    <img className='login__allimg' src="/images/cta-logo-two.png" alt="" />
                </div>
                <div className="login__bgImage">
                </div>
            </div>

        </section>
    );
};



export default Login