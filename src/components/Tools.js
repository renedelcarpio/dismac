import React from 'react'

import '../styles/Tools.css'
import ChainSaw from '../images/chainsaw.png'
import Blower from '../images/blower.png'
import Drill from '../images/drill.png'
import HandTools from '../images/tools.png'
import Toolbox from '../images/tool-box.png'


function Tools() {
    return (
        <div className='goods-container'>
            <div className='title-container goods-title'>
                <h1>Herramientas y Maquinaria</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img className='chainsaw image' src={ ChainSaw } alt="Cortador de arbustos"/>
                    <h3 className='image-name'>Cortadores</h3>
                </div>
                <div className='goods-image'>
                    <img className='blower image' src={ Blower } alt="Soplador"/>
                    <h3 className='image-name'>Sopladoras</h3>
                </div>
                <div className='goods-image'>
                    <img className='drill image' src={ Drill } alt="Taladro"/>
                    <h3 className='image-name'>Taladros</h3>
                </div>
                <div className='goods-image'>
                    <img className='hand-tools image' src={ HandTools } alt="Herramientas"/>
                    <h3 className='image-name'>Herramientas</h3>
                </div>
                <div className='goods-image'>
                    <img className='toolbox image' src={ Toolbox } alt="Caja de herramientas"/>
                    <h3 className='image-name'>Cajas</h3>
                </div>
            </div>
        </div>
    )
}

export default Tools