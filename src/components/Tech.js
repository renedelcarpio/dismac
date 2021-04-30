import React from 'react'

import '../styles/Tech.css'
import Cell from '../images/cell.png'
import Tablet from '../images/tablet.png'
import Laptop from '../images/laptop.png'
import Headset from '../images/headset.png'
import Console from '../images/console.png'


function Tech() {
    return (
        <div className='goods-container'>
            <div className='title-container goods-title'>
                <h1>Telefonía y Tecnología</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img loading='lazy' className='cell image' src={ Cell } alt="Celular"/>
                    <h3 className='image-name'>Celulares</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='tablet image' src={ Tablet } alt="Tablet"/>
                    <h3 className='image-name'>Tablets</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='laptop image' src={ Laptop } alt="Computadora"/>
                    <h3 className='image-name'>Computadoras</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='headset image' src={ Headset } alt="Audífonos"/>
                    <h3 className='image-name'>Accesorios</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='console image' src={ Console } alt="Consola"/>
                    <h3 className='image-name'>Consolas</h3>
                </div>
            </div>
        </div>
    )
}

export default Tech