import React from 'react'
import Navbar from './navbar'
import ReactLogo from '../assets/images/React.png'
import Adobe from '../assets/images/adobe.svg'
import MySQL from '../assets/images/mysql.svg'
import Mongo from '../assets/images/mongodb.svg'
import Vanilla from '../assets/images/vanillaJS.svg'
import HTMLLogo from '../assets/images/html5.svg'
import CSS from '../assets/images/css3.svg'
import Bulma from '../assets/images/bulma-logo.png'
import Bootstrap from '../assets/images/bootstrap.svg'
import jQuery from '../assets/images/jQuery.svg'
import NodeJS from '../assets/images/nodeJS.svg'
import Express from '../assets/images/express.svg'



function SkillsProficienciesBody() {
    return (
        <div>
            <section className='hero is-bold is-fullheight is-success'>
                <div className='columns'>
                    <div className='column'>
                        <div className="has-text-centered">
                            <h1 className="titleItem">Title</h1>
                            <h2 className="subTitleItem">Subtitle</h2>
                        </div>
                        <br />
                        <div className='columns is-w-90 has-text-centered'>
                            <div className='column'>
                                <h2 className="headerItem">Front-End</h2>
                                <div className="card-image">
                                    <figure className="image ">
                                        <img src={ReactLogo} alt="Streaming Site Screenshot" />
                                    </figure>
                                </div><div className="card-image">
                                    <figure className="image ">
                                        <img src={HTMLLogo} alt="Streaming Site Screenshot" />
                                    </figure>
                                </div><div className="card-image">
                                    <figure className="image ">
                                        <img src={Vanilla} alt="Streaming Site Screenshot" />
                                    </figure>
                                </div><div className="card-image">
                                    <figure className="image ">
                                        <img src={jQuery} alt="Streaming Site Screenshot" />
                                    </figure>
                                </div><div className="card-image">
                                    <figure className="image ">
                                        <img src={CSS} alt="Streaming Site Screenshot" />
                                    </figure>
                                </div><div className="card-image">
                                    <figure className="image ">
                                        <img src={Bulma} alt="Streaming Site Screenshot" />
                                    </figure>
                                </div><div className="card-image">
                                    <figure className="image ">
                                        <img src={Bootstrap} alt="Streaming Site Screenshot" />
                                    </figure>
                                </div>
                            </div>
                            <div className='column'>
                                <h2 className="headerItem">Back-End</h2>
                                <div className="card-image">
                                    <figure className="image ">
                                        <img src={Mongo} alt="Streaming Site Screenshot" />
                                    </figure>
                                </div><div className="card-image">
                                    <figure className="image ">
                                        <img src={MySQL} alt="Streaming Site Screenshot" />
                                    </figure>
                                </div><div className="card-image">
                                    <figure className="image ">
                                        <img src={NodeJS} alt="Streaming Site Screenshot" />
                                    </figure>
                                </div><div className="card-image">
                                    <figure className="image ">
                                        <img src={Express} alt="Streaming Site Screenshot" />
                                    </figure>
                                </div>
                            </div>
                            <div className='column'>
                                <h2 className="headerItem">Other/Misc</h2>
                                <div className="card-image">
                                    <figure className="image ">
                                        <img src={Adobe} alt="Creative Cloud" />
                                    </figure>
                                </div>
                                <h3 className='subTitleItem'>Dad Jokes and Puns</h3>
                                <h3 className='subTitleItem'>Storytelling</h3>
                                <h3 className='subTitleItem'>Random Facts</h3>
                                <h3 className='subTitleItem'>Movie Quotes</h3>
                            </div>
                        </div>
                    </div>

                </div>
                <Navbar />
            </section>
        </div>
    )
}

export default SkillsProficienciesBody;
