import React from 'react'
import Logo from '../assets/svg/logo.svg'
import CanvasSky from '../components/canvasSky'
import MovingStars from '../components/movingStars'

import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="home">
            <div className="home_container flex flex_center flex_column">
                <img src={Logo} alt="logo" />
                <p className="title c-white fs-96 nobleman upcase">in the dark</p>
                <p className="subtitle athiti regular c-white fs-36">How the ancients discovered astronomy</p>
                <Link to="/" className="enter_btn fs-36 c-white nobleman">Enter</Link>
            </div>
            <CanvasSky />
            <MovingStars />
        </div>
    )
}