import React, { useContext, useState } from 'react'
import { CastMessageContext } from '../App'



function NavbarMobile() {
    const { handleMessageCasting } = useContext(CastMessageContext);

    const [burgerState, setBurgerState] = useState(false);

    const handleBurgerState = e => {
        e.preventDefault();

        setBurgerState(!burgerState);
    }

    return (

        <div>
            <nav className="navbar is-fixed-bottom is-primary" role="navigation" aria-label="main navigation">
                <div className='container'>
                    <div className="navbar-brand">
                        <a className="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                        </a>

                        <div id='navbarBurger' onClick={handleBurgerState} role="button" className={`navbar-burger burger ${burgerState ? "is-active" : ""}`} data-target="navMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navMenu" className={`navbar-menu ${burgerState ? "is-active" : ""}`}>
                        <div className="navbar-start">
                            <a className="navbar-item">
                                Home
                        </a>

                            <a className="navbar-item">
                                Documentation
                        </a>

                            <div className="navbar-item has-dropdown has-dropdown-up is-hoverable">
                                <a className="navbar-link is-arrowless">
                                    More
                            </a>

                                <div className="navbar-dropdown">
                                    <a className="navbar-item">
                                        About
                            </a>
                                    <a className="navbar-item">
                                        Jobs
                            </a>
                                    <a className="navbar-item">
                                        Contact
                            </a>
                                    <hr className="navbar-divider" />
                                    <a className="navbar-item">
                                        Report an issue
                                </a>
                                </div>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item">
                                <div className="buttons">
                                    <a className="button is-primary">
                                        <strong>Sign up</strong>
                                    </a>
                                    <a className="button is-light">
                                        Log in
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavbarMobile