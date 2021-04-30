import React from 'react'

import '../styles/Furniture.css'
import Bed from '../images/bed.png'
import Armchair from '../images/armchair.png'
import Table from '../images/table.png'
import KitchenFurniture from '../images/furniture.png'
import Desk from '../images/desk.png'


function Furniture() {
    return (
        <div className='electronics-container'>
            <div className='title-container goods-title'>
                <h1>Muebles</h1>
            </div>
            <div className='goods__image-container'>
                <div className='goods-image'>
                    <img className='bed' src={ Bed } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='armchair' src={ Armchair } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='table' src={ Table } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='kitchen-furniture' src={ KitchenFurniture } alt="Refrigerador"/>
                </div>
                <div className='goods-image'>
                    <img className='desk' src={ Desk } alt="Refrigerador"/>
                </div>
            </div>
        </div>
    )
}

export default Furniture