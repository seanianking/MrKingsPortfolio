import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar is-fixed-bottom is-primary" role="navigation" aria-label="main navigation">

                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/heart-king-2280234-1922117.png" alt='King of hearts card image' style={{height: '100px', width: '50px' }} />
                    </a>
                </div>

                <div className="navbar-start">
                    <a className="navbar-item">Home</a>
                    <a className="navbar-item">Backstory</a>
                    <a className="navbar-item">Skills/Proficiencies</a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">Send a Message</a>
                </div>

            </nav>
        </div>
    )
}

export default Navbar