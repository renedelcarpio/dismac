import React from 'react'

import '../styles/HomeStuff.css'
import Pans from '../images/pans.png'
import Crockery from '../images/crockery.png'
import Cup from '../images/cup.png'
import Knives from '../images/knives.png'
import Grill from '../images/grill.png'


function HomeStuff() {
    return (
        <div className='goods-container'>
            <div className='title-container goods-title'>
                <h1>Hogar</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img loading='lazy' className='pans image' src={ Pans } alt="Ollas"/>
                    <h3 className='image-name'>Menaje de Cocina</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='crockery image' src={ Crockery } alt="Vajilla"/>
                    <h3 className='image-name'>Menaje de mesa</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='cup image' src={ Cup } alt="Copas"/>
                    <h3 className='image-name'>Vasos y Copas</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='knives image' src={ Knives } alt="Cuchillos"/>
                    <h3 className='image-name'>Cuchillería</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='grill image' src={ Grill } alt="Churrasquera"/>
                    <h3 className='image-name'>Exterior</h3>
                </div>
            </div>
        </div>
    )
}

export default HomeStuff