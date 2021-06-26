import React from 'react'
import '../Styles/Login.css'
import logo from '../Assets/spotify-logo-2.jpg'

function Login() {
    return (
        <div className="login">
            <img src={logo} alt="spotify logo" />
            <a className='py-3' href='#'>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
