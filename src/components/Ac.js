import React from 'react'

import '../styles/Ac.css'
import Air from '../images/a-c.png'
import RoofAc from '../images/roof-ac.png'
import Calefon from '../images/calefon.png'
import TempTank from '../images/temp-tank.png'
import Fan from '../images/fan.png'


function Ac() {
    return (
        <div className='electronics-container'>
            <div className='title-container goods-title'>
                <h1>Climatización</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img className='air' src={ Air } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='roof-ac' src={ RoofAc } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='calefon' src={ Calefon } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='temp-tank' src={ TempTank } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='fan' src={ Fan } alt="Refrigerador"/>
                </div>
            </div>
        </div>
    )
}

export default Ac