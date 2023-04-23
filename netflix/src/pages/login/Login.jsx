import { useState } from "react"
import "./login.scss"
import React from 'react'
import { useRef } from "react"

const Login = () => {

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Logo' />
                    
                </div>
            </div>
            <div className="container">
                    <form >
                        <h1>Sing In</h1>
                        <input type="email" placeholder="Email or Phone Number"/>
                        <input type="password" placeholder="Password"/>
                        <button className="loginButton">Sing In</button>
                        <span>New to Netfilx? <b>Sing up now</b></span>
                        <small>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.<b>Learn more</b>.
                        </small>
                    </form>
            </div>
        </div>
    )
}

export default Login