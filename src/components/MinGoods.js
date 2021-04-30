import React from 'react'

import '../styles/MinGoods.css'
import Vaccum from '../images/vaccum.png'
import Blender from '../images/blender.png'
import Water from '../images/water.png'
import Sewing from '../images/sewing-machine.png'
import Scraper from '../images/scraper.png'


function MinGoods() {
    return (
        <div className='goods-container'>
            <div className='title-container goods-title'>
                <h1>Electro Menor</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img loading='lazy' className='vaccum image' src={ Vaccum } alt="Aspiradora"/>
                    <h3 className='image-name'>Aspiradoras</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='blender image' src={ Blender } alt="Licuadora"/>
                    <h3 className='image-name'>Electrodomésticos</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='water image' src={ Water } alt="Dispensador"/>
                    <h3 className='image-name'>Dispensadores</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='sewing image' src={ Sewing } alt="Máquina de coser"/>
                    <h3 className='image-name'>Máquinas de coser</h3>
                </div>
                <div className='goods-image'>
                    <img loading='lazy' className='scraper image' src={ Scraper } alt="Rasuradora"/>
                    <h3 className='image-name'>Rasuradoras</h3>
                </div>
            </div>
        </div>
    )
}

export default MinGoods