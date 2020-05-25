import React, { useContext } from 'react'
import { CastMessageContext } from '../App'

// handleBurgerState

function Navbar() {
    const { handleMessageCasting } = useContext(CastMessageContext);

    return (

        <div>
            

        </div>
    )
}

export default Navbar

{/* <nav className="navbar is-fixed-bottom is-primary navMargin" role="navigation" aria-label="main navigation">


<div class="navbar-brand">
    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>
</div>


<div className="navbar-menu">
    <a href='/' className="navbar-item">Home</a>
    <a href='/Backstory' className="navbar-item">Backstory</a>
    <a href='/SkillsProficiencies' className="navbar-item">Skills/Proficiencies</a>
    <a href='/Adventures' className="navbar-item">Adventures</a>
    <a className="navbar-item" href='#' onClick={handleMessageCasting}>Send a Message</a>



</div>
</nav> */}