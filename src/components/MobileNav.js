import React, { useContext, useState } from 'react'
import { CastMessageContext } from '../App'



function MobileNav() {
    const { handleMessageCasting } = useContext(CastMessageContext);

    const [menuState, setMenuState] = useState(false);

    const handleMenuState = e => {
        e.preventDefault();

        setMenuState(!burgerState);
    }

    return (

        <div>
            <div>
                <nav className="navbar is-fixed-top is-primary navMargin" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <img style={{ width: "50px", height: "50px", marginLeft: '10px' }} src="https://i.ya-webdesign.com/images/transparent-king-crown-png-5.png" alt='The Crown' />
                        <div className='navbar-menu'>
                            <a href='/' className="navbar-item">Home</a>
                            <a href='/Backstory' className="navbar-item">Backstory</a>
                            <a href='/SkillsProficiencies' className="navbar-item">Skills/Proficiencies</a>
                            <a href='/Adventures' className="navbar-item">Adventures</a>
                            <a className="navbar-item" href='#' onClick={handleMessageCasting}>Send a Message</a>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default MobileNav