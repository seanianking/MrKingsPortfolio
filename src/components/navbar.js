import React, { useContext } from 'react'
import { CastMessageContext } from './AdventuresBody'

function Navbar() {
    const { handleMessageCasting, castMessage } = useContext(CastMessageContext);

    return (

        <div>
            <nav className="navbar is-fixed-bottom is-primary" role="navigation" aria-label="main navigation">

                <div className="navbar-start">
                    <a href='/' className="navbar-item">Home</a>
                    <a href='/Backstory' className="navbar-item">Backstory</a>
                    <a href='/SkillsProficiencies' className="navbar-item">Skills/Proficiencies</a>
                    <a href='/Adventures' className="navbar-item">Adventures</a>
                    <a className="navbar-item" href='' onClick={handleMessageCasting}>Send a Message</a>
                </div>
            </nav>

        </div>

    )
}

export default Navbar