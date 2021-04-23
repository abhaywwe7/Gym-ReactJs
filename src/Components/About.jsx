import React from 'react';
import aboutimg from '../images/about.png';
function About() {
    return (
        <div id='about'>
            <div className="about-image">
                <img src={aboutimg} alt="" />
            </div>
            <div className="about-text">
                <h1>MORE ABOUT US</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium tenetur cum ea ratione est quo inventore enim, in ex numquam laboriosam corporis aliquam et qui.</p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}

export default About;
