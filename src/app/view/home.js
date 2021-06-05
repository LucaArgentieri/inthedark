import React from 'react'
import Logo from '../assets/svg/logo.svg'

import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="home">
            <div className="home_container flex flex_center flex_column">
                <img src={Logo} alt="logo" />
                <p>in the dark</p>
                <p>How the ancients discovered astronomy</p>
                <Link to="/">Enter</Link>
            </div>
            <canvas></canvas>
        </div>
    )
}
