import React, { useContext, useState } from 'react'
import { CastMessageContext } from '../App'
import {Link} from 'react-router-dom';



function MobileNav() {
    const { handleMessageCasting } = useContext(CastMessageContext);

    const [menuState, setMenuState] = useState(false);

    const handleMenuState = e => {
        e.preventDefault();
        setMenuState(!menuState);
    }

    return (

        <div>
            <nav className="navbar is-fixed-top is-primary " role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <img style={{ width: "50px", height: "50px", marginLeft: '10px' }} src="https://i.ya-webdesign.com/images/transparent-king-crown-png-5.png" alt='The Crown' />
                    <div onClick={handleMenuState} className={` dropdown is-paddingless ${menuState ? "is-active" : ""}`}>
                        <div className="dropdown-trigger navbar-item">
                            <a href='#' className="button navbar-item is-primary" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Character Sheet</span>
                                <span className="icon is-small">
                                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>

                        <div className="dropdown-menu " id="dropdown-menu" role="menu">
                            <div className="dropdown-content">
                                <Link to="/" className="dropdown-item">
                                    Home</Link>
                                <Link to="/Backstory" className="dropdown-item">
                                    Backstory</Link>
                                <Link to="/SkillsProficiencies" className="dropdown-item">
                                    Skills/Proficiencies</Link>
                                <Link to="/Adventures" className="dropdown-item">
                                    Adventures</Link>
                                <hr className="dropdown-divider" />
                                <a href="" className="dropdown-item" onClick={handleMessageCasting}>
                                    Send a Message</a>
                            </div>
                        </div>
                    </div>
                </div>


            </nav>
        </div >
    )
}

export default MobileNav