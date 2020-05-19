import React from "react";
import Resume from '../../assets/pdf/CodingResume.pdf'

const ResumeArea = function() {

    return(
<section className="hero is-info is-bold is-fullheight has-text-centered">
  <div className="hero-body">
    <div className="container">
      <div className="columns is-gapless">
        <div className="column is-one-third">
          <h1 className="resume">
              This is my adventure log.
          </h1>
                <a className='resume has-text-primary' href="/">Return to The King's Gamble</a>
        </div>
        <div className="column">
          <embed src={Resume} type="application/pdf" width="100%" height='800px'></embed>
        </div>
      </div>
    </div>
  </div>
</section>
  )
};

export default ResumeArea