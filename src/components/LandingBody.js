import React from 'react'
import Navbar from './navbar'

function LandingBody() {
    return (
        <div>
            <div className='columns is-gapless'>
                <div className='column'>
                    <div className="hero is-fullheight is-bold is-link">
                        <div className="container has-text-centered">
                            <h1 className="title">Sean King, Full-Stack Developer</h1>
                            <h2 className='subtitle'>TableTop RPG fan, and not your average NPC</h2>
                        </div>
                    </div>
                </div>

            </div>
            <Navbar />
        </div>
    )
}

export default LandingBody;