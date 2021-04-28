import React from 'react'

import '../styles/Tech.css'
import Cell from '../images/cell.png'
import Tablet from '../images/tablet.png'
import Laptop from '../images/laptop.png'
import Headset from '../images/headset.png'
import Console from '../images/console.png'


function Tech() {
    return (
        <div className='electronics-container'>
            <div className='title-container goods-title'>
                <h1>Telefonía y tecnología</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img className='cell' src={ Cell } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='tablet' src={ Tablet } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='laptop' src={ Laptop } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='headset' src={ Headset } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='console' src={ Console } alt="Refrigerador"/>
                </div>
            </div>
        </div>
    )
}

export default Tech