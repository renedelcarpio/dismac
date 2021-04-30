import React from 'react'
import { SliderData } from './SliderData'

import '../styles/Home.css'
import Header from './Header'
import ImageSlider from './ImageSlider'
import Warranty from './Warranty'
import Goods from './Goods'
import Electronics from './Electronics'
import Tech from './Tech'
import Ac from './Ac'
import MinGoods from './MinGoods'
import HomeStuff from './HomeStuff'
import Furniture from './Furniture'
import Tools from './Tools'
import Footer from './Footer'
import Info from './Info'

function Home() {
    return (
        <div>
            <Header/>
            <div className='search-container'>
                <span className='search-icon'><i className="fas fa-search"></i></span>
                <input className='search' type="text" placeholder='Buscar...'/>
            </div>
            <ImageSlider slides={SliderData} />
            <Warranty/>
            <Goods/>
            <Electronics/>
            <Tech/>
            <Ac/>
            <MinGoods/>
            <HomeStuff/>
            <Furniture/>
            <Tools/>
            <Info/>
            <Footer/>
        </div>
    )
}

export default Home
