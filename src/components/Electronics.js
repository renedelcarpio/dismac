import React from 'react'

import '../styles/Electronics.css'
import Tv from '../images/televisor.png'
import HomeTheater from '../images/home-theater.png'
import Audio from '../images/audio.png'
import Camara from '../images/camara.png'
import Security from '../images/security.png'


function Electronics() {
    return (
        <div className='goods-container'>
            <div className='title-container goods-title'>
                <h1>Electrónica</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img className='tv image' src={ Tv } alt="Televisor"/>
                    <h3 className='image-name'>Tv & Video</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='home-theater image' src={ HomeTheater } alt="Home Theater"/>
                    <h3 className='image-name'>Home Theaters</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='audio image' src={ Audio } alt="Audio"/>
                    <h3 className='image-name'>Audio</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='camara image' src={ Camara } alt="Cámara fotográfica"/>
                    <h3 className='image-name'>Fotografía</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='security image' src={ Security } alt="Cámara de seguridad"/>
                    <h3 className='image-name'>Seguridad</h3>
                </div>
            </div>
        </div>
    )
}

export default Electronics
