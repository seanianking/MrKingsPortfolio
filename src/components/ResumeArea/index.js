import React from "react";
import Resume from '../../assets/pdf/CodingResume.pdf'

const ResumeArea = function() {

    return(
<section className="hero is-dark is-bold is-fullheight has-text-centered">
  <div className="hero-body">
    <div className="container">
      <div className="columns">
        <div className="column is-one-third">
          <h1 id="aboutTitle" className="resume">
              Welcome to my Resume
          </h1>
                <a href="/">Back to the Portfolio Please!</a>
        </div>
        <div className="column">
          <embed id="resume" src={Resume} type="application/pdf" width="80%" height="700px"></embed>
        </div>
      </div>
    </div>
  </div>
</section>
  )
};

export default ResumeArea