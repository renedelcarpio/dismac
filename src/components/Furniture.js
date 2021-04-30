import React from 'react'

import '../styles/Furniture.css'
import Bed from '../images/bed.png'
import Armchair from '../images/armchair.png'
import Table from '../images/table.png'
import KitchenFurniture from '../images/furniture.png'
import Desk from '../images/desk.png'


function Furniture() {
    return (
        <div className='goods-container'>
            <div className='title-container goods-title'>
                <h1>Muebles</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img className='bed image' src={ Bed } alt="Cama"/>
                    <h3 className='image-name'>Dormitorio</h3>
                </div>
                <div className='goods-image'>
                    <img className='armchair image' src={ Armchair } alt="Sillón"/>
                    <h3 className='image-name'>Sala de Estar</h3>
                </div>
                <div className='goods-image'>
                    <img className='table image' src={ Table } alt="Mesa de comedor"/>
                    <h3 className='image-name'>Comedor</h3>
                </div>
                <div className='goods-image'>
                    <img className='kitchen-furniture image' src={ KitchenFurniture } alt="Mueble de cocina"/>
                    <h3 className='image-name'>Muebles de Cocina</h3>
                </div>
                <div className='goods-image'>
                    <img className='desk image' src={ Desk } alt="Escritorio"/>
                    <h3 className='image-name'>Escritorio</h3>
                </div>
            </div>
        </div>
    )
}

export default Furniture