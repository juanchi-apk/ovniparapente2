import React from 'react';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import'./testimonial.scss';

import testimonials_1 from "../../Images/testimonials_1.mp4";
import testimonials_2 from "../../Images/testimonials_2.mp4";
import testimonials_3 from "../../Images/testimonials_3.mp4";

const Testimonials = ()=> {
    return (
        <div >
        <h1 className="testimonials_title">DEPOIMENTOS</h1>
        <div className ="testimonialContainer">
        
      <Player
      fluid={false}
      width={270}
      height={480}
        aspectRatio="9:16"
        src={testimonials_1}
      />
      <Player
      fluid={false}
      width={270}
      height={480}
      aspectRatio="9:16"

      src={testimonials_2}
    />
    <Player
    fluid={false}
    width={270}
    height={480}
    aspectRatio="9:16"

    src={testimonials_3}
  />
  </div>
  </div>

    );
  };

  export default Testimonials;