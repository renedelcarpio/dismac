import React from 'react'

import '../styles/HomeStuff.css'
import Pans from '../images/pans.png'
import Crockery from '../images/crockery.png'
import Cup from '../images/cup.png'
import Knives from '../images/knives.png'
import Grill from '../images/grill.png'


function HomeStuff() {
    return (
        <div className='electronics-container'>
            <div className='title-container goods-title'>
                <h1>Hogar</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img className='pans' src={ Pans } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='crockery' src={ Crockery } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='cup' src={ Cup } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='knives' src={ Knives } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='grill' src={ Grill } alt="Refrigerador"/>
                </div>
            </div>
        </div>
    )
}

export default HomeStuff