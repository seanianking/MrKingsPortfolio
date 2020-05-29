import React, { useState, useContext } from 'react'
import { CastMessageContext } from '../App'

function Navbar() {
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
                    <div onClick={handleMenuState} class={` dropdown is-paddingless ${menuState ? "is-active" : ""}`}>
                        <div class="dropdown-trigger navbar-item">
                            <a class="button navbar-item is-primary" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Character Sheet</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>

                        <div class="dropdown-menu " id="dropdown-menu" role="menu">
                            <div class="dropdown-content">
                                <a href="/" class="dropdown-item">
                                    Home</a>
                                <a href="/Backstory" class="dropdown-item">
                                    Backstory</a>
                                <a href="/SkillsProficiencies" class="dropdown-item">
                                    Skills/Proficiencies</a>
                                <a href="/Adventures" class="dropdown-item">
                                    Adventures</a>
                                <hr class="dropdown-divider" />
                                <a href="#" class="dropdown-item" onClick={handleMessageCasting}>
                                    Send a Message</a>
                            </div>
                        </div>
                    </div>
                </div>


            </nav>
        </div >
    )
}

export default Navbar



{/* <nav className="navbar  is-primary" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                <img style={{width: "50px", height: "50px", marginLeft: '10px'}} src="https://i.ya-webdesign.com/images/transparent-king-crown-png-5.png" alt='The Crown'/>

                    <div className='dropdown is-active'>                    
                    <a href='/' className="navbar-item">Home</a>
                    <a href='/Backstory' className="navbar-item">Backstory</a>
                    <a href='/SkillsProficiencies' className="navbar-item">Skills/Proficiencies</a>
                    <a href='/Adventures' className="navbar-item">Adventures</a>
                    <a className="navbar-item" href='#' onClick={handleMessageCasting}>Send a Message</a>
                    </div>

                </div>
            </nav> */}