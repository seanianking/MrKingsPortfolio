import React from 'react'
import Navbar from './navbar'

function LandingBody() {
    return (
        <div>
            <section style={{paddingBottom: "3.25rem", paddingTop: "3.25rem"}} className='hero is-fullheight  is-bold is-link'>
                <div class="hero-body">
                    <section>
                        <div class="marginTop">
                            <h1 class="titleItem">Sean King, Full-Stack Developer</h1>
                            <h2 class="subTitleItem">TableTop RPG fan, and not your average NPC</h2>
                        </div>
                    </section>
                </div>
                <section>
                    <section>
                        <div class='container marginBottom'>
                            <h1 class='miscItem'>View my Character Sheet using the links below</h1>
                        </div>
                    </section>
                </section>
                <Navbar />
            </section>
        </div >
    )
}

export default LandingBody;