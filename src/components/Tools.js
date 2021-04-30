import React from 'react'

import '../styles/Tools.css'
import ChainSaw from '../images/chainsaw.png'
import Blower from '../images/blower.png'
import Drill from '../images/drill.png'
import HandTools from '../images/tools.png'
import Toolbox from '../images/tool-box.png'


function Tools() {
    return (
        <div className='electronics-container'>
            <div className='title-container goods-title'>
                <h1>Herramientas y Maquinaria</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img className='chainsaw' src={ ChainSaw } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='blower' src={ Blower } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='drill' src={ Drill } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='hand-tools' src={ HandTools } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='toolbox' src={ Toolbox } alt="Refrigerador"/>
                </div>
            </div>
        </div>
    )
}

export default Tools