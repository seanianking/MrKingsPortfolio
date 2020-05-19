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
            <section className='hero is-bold is-fullheight is-warning'>
                <div className='columns'>
                    <div className='column'>
                        <div className="has-text-centered">
                            <h1 className="titleItem">My Skill Inventory</h1>
                            <h2 className="subTitleItem">Leveling up and learning new skills all the time.</h2>
                        </div>
                        <br />
                        <div className='columns is-w-90 has-text-centered marginBottom'>
                            <div className='column'>
                                <h2 className="headerItem">Front-End</h2>
                                <div className='columns'>

                                    <div className='column'>

                                        <div className="card-image is-w-90">
                                            <figure className="image ">
                                                <img src={ReactLogo} alt="Streaming Site Screenshot" />
                                            </figure>
                                        </div>
                                        <div className="card-image is-w-70">
                                            <figure className="image ">
                                                <img src={HTMLLogo} alt="Streaming Site Screenshot" />
                                            </figure>
                                        </div>
                                        <div className="card-image is-w-70">
                                            <figure className="image ">
                                                <img className='is-rounded' src={Vanilla} alt="Streaming Site Screenshot" />
                                            </figure>
                                        </div>
                                    </div>
                                    <div className='column'>
                                        <div className="card-image is-w-70">
                                            <figure className="image ">
                                                <img src={CSS} alt="Streaming Site Screenshot" />
                                            </figure>
                                        </div>
                                        <div className="card-image is-w-90">
                                            <figure className="image ">
                                                <img className='is-rounded' src={Bulma} alt="Streaming Site Screenshot" />
                                            </figure>
                                        </div>
                                        <div className="card-image is-w-70">
                                            <figure className="image ">
                                                <img className='is-rounded' src={Bootstrap} alt="Streaming Site Screenshot" />
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div className='columns'>
                                    <div className='column'>
                                    <div className="card-image">
                                        <figure className="image ">
                                            <img src={jQuery} alt="Streaming Site Screenshot" />
                                        </figure>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='column'>
                                <h2 className="headerItem">Back-End</h2>
                                <div className="card-image is-w-70">
                                    <figure className="image ">
                                        <img src={Mongo} alt="Streaming Site Screenshot" />
                                    </figure>
                                </div>
                                <div className="card-image is-w-70">
                                    <figure className="image ">
                                        <img src={MySQL} alt="Streaming Site Screenshot" />
                                    </figure>
                                </div>
                                <div className="card-image is-w-70">
                                    <figure className="image ">
                                        <img src={NodeJS} alt="Streaming Site Screenshot" />
                                    </figure>
                                </div>
                                <div className="card-image is-w-70">
                                    <figure className="image ">
                                        <img src={Express} alt="Streaming Site Screenshot" />
                                    </figure>
                                </div>
                            </div>
                            <div className='column'>
                                <h2 className="headerItem">Other/Misc</h2>
                                <div className="card-image is-w-70">
                                    <figure className="image ">
                                        <img src={Adobe} alt="Creative Cloud" />
                                    </figure>
                                </div>
                                <h3 className='miscItem'>Dad Jokes and Puns</h3> <br/>
                                <h3 className='miscItem'>Storytelling</h3> <br/>
                                <h3 className='miscItem'>Random Facts</h3> <br/>
                                <h3 className='miscItem'>Movie Quotes</h3>
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
