import React from 'react'
import { SliderData } from './SliderData'

import '../styles/Home.css'
import Header from './Header'
import ImageSlider from './ImageSlider'
import Warranty from './Warranty'

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
        </div>
    )
}

export default Home
