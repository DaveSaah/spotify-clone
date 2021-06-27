import React from 'react'
import '../Styles/Login.css'
import logo from '../Assets/spotify-logo-2.jpg'
import { loginUrl } from '../spotify'

function Login() {
    return (
        <div className="login">
            <img src={logo} alt="spotify logo" />
            <a href={loginUrl} className='py-3'>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
