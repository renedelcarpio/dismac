import React from 'react'

import '../styles/Electronics.css'
import Tv from '../images/televisor.png'
import HomeTheater from '../images/home-theater.png'
import Audio from '../images/audio.png'
import Camara from '../images/camara.png'
import Security from '../images/security.png'


function Electronics() {
    return (
        <div className='electronics-container'>
            <div className='title-container goods-title'>
                <h1>Electrónica</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img className='tv' src={ Tv } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='home-theater' src={ HomeTheater } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='audio' src={ Audio } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='camara' src={ Camara } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='security' src={ Security } alt="Refrigerador"/>
                </div>
            </div>
        </div>
    )
}

export default Electronics
