import React from 'react'

import '../styles/Home.css'
import Header from './Header'

function Home() {
    return (
        <div>
            <Header/>
            <div className='search-container'>
                <span className='search-icon'><i className="fas fa-search"></i></span>
                <input className='search' type="text" placeholder='Buscar...'/>
            </div>
        </div>
    )
}

export default Home
