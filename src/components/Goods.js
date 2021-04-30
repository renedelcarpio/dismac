import React from 'react'

import '../styles/Goods.css'
import Refri from '../images/heladera.png'
import Stove from '../images/cocina.png'
import Campana from '../images/campana.png'
import Wash from '../images/lavadora.png'
import Freezer from '../images/freezer.png'

function Goods() {
    return (
        <div className='goods-container'>
            <div className='title-container goods-title'>
                <h1>Línea Blanca</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img className='refrigerator image' src={ Refri } alt="Refrigerador"/>
                    <h3 className='image-name'>Refrigeradores</h3>
                </div>
                <div className='goods-image'>
                    <img className='stove image' src={ Stove } alt="Cocina"/>
                    <h3 className='image-name'>Cocinas</h3>
                </div>
                <div className='goods-image'>
                    <img className='campana image' src={ Campana } alt="Campana"/>
                    <h3 className='image-name'>Campanas</h3>
                </div>
                <div className='goods-image'>
                    <img className='wash image' src={ Wash } alt="Lavadora"/>
                    <h3 className='image-name'>Lavadoras</h3>
                </div>
                <div className='goods-image'>
                    <img className='freezer image' src={ Freezer } alt="Freezer"/>
                    <h3 className='image-name'>Freezer</h3>
                </div>
            </div>
        </div>
    )
}

export default Goods
