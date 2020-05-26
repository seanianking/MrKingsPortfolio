import React, { useContext, useState } from 'react'
import { CastMessageContext } from '../App'



function Navbar() {
    const { handleMessageCasting } = useContext(CastMessageContext);

    const [burgerState, setBurgerState] = useState(false);

    const handleBurgerState = e => {
        e.preventDefault();

        setBurgerState(!burgerState);
    }

    return (

        <div>
            <nav className="navbar is-fixed-bottom is-primary navMargin" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>

                    <a onClick={handleBurgerState} role="button" className={`navbar-burger burger ${burgerState ? "is-active is-block": ""}`} aria-label="menu" aria-expanded="false" data-target="navMenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navMenu" class={`navbar-menu ${burgerState ? "is-active is-block" : ""}`}>
                    <div class="navbar-start">
                        <a class="navbar-item">
                            Home
                        </a>

                        <a class="navbar-item">
                            Documentation
                        </a>

                        <div class="navbar-item has-dropdown has-dropdown-up is-hoverable">
                            <a class="navbar-link">
                                More
                            </a>

                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    About
                            </a>
                                <a class="navbar-item">
                                    Jobs
                            </a>
                                <a class="navbar-item">
                                    Contact
                            </a>
                                <hr class="navbar-divider" />
                                <a class="navbar-item">
                                    Report an issue
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a class="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar

{/* <nav className="navbar is-fixed-bottom is-primary navMargin" role="navigation" aria-label="main navigation">


<div class="navbar-brand">

    <a href='/' className="navbar-item">Home</a>
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>

</div>

<div className="navbar-menu">
    
    <a href='/Backstory' className="navbar-item">Backstory</a>
    <a href='/SkillsProficiencies' className="navbar-item">Skills/Proficiencies</a>
    <a href='/Adventures' className="navbar-item">Adventures</a>
    <a className="navbar-item" href='#' onClick={handleMessageCasting}>Send a Message</a>

</div>
</nav> */}