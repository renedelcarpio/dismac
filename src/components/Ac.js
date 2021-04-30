import React from 'react'

import '../styles/Ac.css'
import Air from '../images/a-c.png'
import RoofAc from '../images/roof-ac.png'
import Calefon from '../images/calefon.png'
import TempTank from '../images/temp-tank.png'
import Fan from '../images/fan.png'


function Ac() {
    return (
        <div className='goods-container'>
            <div className='title-container goods-title'>
                <h1>Climatización</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img className='air image' src={ Air } alt="Aire acondicionado split"/>
                    <h3 className='image-name'>Climatización</h3>
                </div>
                <div className='goods-image'>
                    <img className='roof-ac image' src={ RoofAc } alt="Aire acondicionado comercial"/>
                    <h3 className='image-name'>Comercial</h3>
                </div>
                <div className='goods-image'>
                    <img className='calefon image' src={ Calefon } alt="Calefón"/>
                    <h3 className='image-name'>Calefones</h3>
                </div>
                <div className='goods-image'>
                    <img className='temp-tank image' src={ TempTank } alt="Termo tanque"/>
                    <h3 className='image-name'>Termo Tanques</h3>
                </div>
                <div className='goods-image'>
                    <img className='fan image' src={ Fan } alt="Ventilador"/>
                    <h3 className='image-name'>Ventiladores</h3>
                </div>
            </div>
        </div>
    )
}

export default Ac