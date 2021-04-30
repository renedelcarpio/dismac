import React from 'react'

import '../styles/MinGoods.css'
import Vaccum from '../images/vaccum.png'
import Blender from '../images/blender.png'
import Water from '../images/water.png'
import Sewing from '../images/sewing-machine.png'
import Scraper from '../images/scraper.png'


function MinGoods() {
    return (
        <div className='electronics-container'>
            <div className='title-container goods-title'>
                <h1>Electro Menor</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img className='vaccum' src={ Vaccum } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='blender' src={ Blender } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='water' src={ Water } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='sewing' src={ Sewing } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='scraper' src={ Scraper } alt="Refrigerador"/>
                </div>
            </div>
        </div>
    )
}

export default MinGoods