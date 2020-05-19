import React from 'react'
import Navbar from './navbar'
import Family from '../assets/images/king239.JPG'

function BackstoryBody() {
    return (
        <div>
            <section className='hero is-fullheight is-bold is-success'>
                <div className='columns'>
                    <div className='column'>
                        <div className=" has-text-centered">
                            <h1 className="titleItem">Baby got Backstory</h1>
                            <h2 className="subTitleItem">A little about me</h2>
                        </div>
                        <br />
                        <div className='columns is-w-90'>
                            <div className='column'>
                                <p className='aboutItem'>
                                    My story starts in Provo, Utah where I grew up like any average person.
                                    Throughout all of my schooling I did normal things like competing in
                                    graphic design and t-shirt creation competitions through Skills USA,
                                    playing sports like Football and Rugby, and only learning to read so 
                                    I would understand the story of the video games I was playing.
                                </p>
                                <p className='aboutItem'>
                                    Puzzles and riddles have always been a favorite hobby of mine, I like 
                                    to be challenged and pushed mentally, to learn and grow. I decided to
                                    learn coding because I knew it would be a challenge and would provide
                                    a number of challenges every day, a new puzzle to solve or riddle to 
                                    answer. I've worked hard to learn how to tease out the answer to those
                                    riddles, and my hard work paid off when I received a certificate for a
                                    Web Development program with the University of Utah.
                                </p>
                                <p className='aboutItem'>
                                    When I have a little free time, I'll usually spend it going on an adventure 
                                    with my wife and daughter. But when I can't do that, I'll try to go on an 
                                    adventure playing Dungeons and Dragons or other tabletop games, or playing 
                                    a video game of nearly any kind.
                                </p>
                            </div>
                            <div className='column '>
                                <figure className="image is-2by3 ">
                                    <img className='border has-text-danger' src={Family} alt="King Family" />
                                </figure>
                            </div>
                        </div>
                    </div>

                </div>
                <Navbar />
            </section>
        </div>
    )
}

export default BackstoryBody;
