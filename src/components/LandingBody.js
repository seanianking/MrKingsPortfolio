import React, { useState, useEffect } from 'react'
import Navbar from './navbar'
import MobileNav from './MobileNav';

function LandingBody() {
    // state and hooks to conditionally render Navbar or MobileNav
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth > 1023);
    const updateNav = () => {
        setViewportWidth(window.innerWidth > 1023);
    }
    useEffect(() => {
        window.addEventListener("resize", updateNav);
        return () => window.removeEventListener("resize", updateNav);
    })
    return (
        <div>
            {viewportWidth ? ("") : (<MobileNav />)}
            <section style={{ paddingBottom: "3.25rem", paddingTop: "3.25rem" }} className='hero is-fullheight  is-bold is-link'>
                <div class="hero-body">
                    <section>
                        <div class="">
                            <h1 class="titleItem">Sean King, Full-Stack Developer</h1>
                            <h2 class="miscItem">TableTop RPG fan, and not your average NPC</h2><br/>
                            {viewportWidth ? ("") : (
                                <div class='container'>
                                    <div>
                                        <h1 class='subTitleItem'>Refer to my character sheet to see why!</h1>
                                    </div>
                                </div>)}
                        </div>
                    </section>
                </div>
                <section>
                    <section>
                        <div class='container marginBottom'>
                            {viewportWidth ? (<h1 class='miscItem'>View my Character Sheet using the links below to see why:</h1>) : ("")}
                        </div>
                    </section>
                </section>
                {viewportWidth ? (<Navbar />) : ("")}
            </section>
        </div >
    )
}

export default LandingBody;