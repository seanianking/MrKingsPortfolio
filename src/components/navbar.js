import React, {useContext} from 'react'
import { CastMessageContext } from '../pages/Adventures'

function Navbar() {
    const {handleMessageCasting, gifState} = useContext(CastMessageContext);

    return (
        <div>
            <nav className="navbar is-fixed-bottom is-primary" role="navigation" aria-label="main navigation">

                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/heart-king-2280234-1922117.png" alt='King of hearts card image' style={{height: '100px', width: '50px' }} />
                    </a>
                </div>

                <div className="navbar-start">
                    <a href='/' className="navbar-item">Home</a>
                    <a href='/Backstory' className="navbar-item">Backstory</a>
                    <a href='/SkillsProficiencies' className="navbar-item">Skills/Proficiencies</a>
                    <a href='/Adventures' className="navbar-item">Adventures</a>
                    <hr className="navbar-divider"/>
                    <a className="navbar-item" href='' onClick={handleMessageCasting}>Send a Message</a>
                </div>

            </nav>
        </div>
    )
}

export default Navbar