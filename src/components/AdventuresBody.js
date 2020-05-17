import React from 'react'
import Navbar from './navbar'

function AdventuresBody() {
    return (
        <div>
            <div className='columns is-gapless'>
            <div className='column'>
                <div className="hero is-fullheight is-info">
                    <div className="container has-text-centered">
                        <h1 className="title">Title</h1>
                        <h2 className="subtitle">Subtitle</h2>
                    </div>
                </div>
            </div>

            </div>
            <Navbar/>
        </div>
    )
}

export default AdventuresBody;
