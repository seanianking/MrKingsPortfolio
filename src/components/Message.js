import React from 'react'

function Message() {
    return (
        <div>

            <div className="quickview column is-one-forth">
                <header className="quickview-header is-primary">
                    <p className="title has-text-warning">Contact me here:</p>
                </header>
                <div className="quickview-body is-success has-text-centered">
                    <div className="container contactItem">
                        <figure className="image ">
                            <a className='has-text-danger' href="https://www.linkedin.com/in/seanianking/">
                                <i className="fab fa-linkedin fa-5x"></i>
                            </a>
                        </figure>
                        <p className='has-text-danger'>LinkedIn</p>
                    </div>
                    <div className="container contactItem">
                        <figure class="image">
                            <a className='has-text-danger' href="https://github.com/seanianking">
                                <i class="fab fa-github fa-5x"></i></a>
                        </figure>
                        <p className='has-text-danger'>GitHub</p>
                    </div>
                    <div className="container contactItem">
                        <figure class="image">
                            <a className='has-text-danger' href="mailto:seanianking@gmail.com">
                                <i class="far fa-envelope fa-5x"></i>
                            </a>
                        </figure>
                        <p className='has-text-danger'>Email me directly</p>
                    </div>
                    <div className="container contactItem">
                        <figure class="image">
                            <a className='has-text-danger' href="src/assets/CodingResume.pdf">
                                <i class="far fa-handshake fa-5x"></i></a>
                        </figure>
                        <p className='has-text-danger'>View my Resume</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Message
