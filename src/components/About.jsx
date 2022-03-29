import React from 'react'
import "../css/about.css"
import photo from "../images/fotoCV.jpg"

function About() {
  return (
    <div id='about'>
  
    <div className='container-deta'>
    <div className='pic-personal'>
        <img width="300px" src={photo} alt="Juan" />
    <div  className='aboutMe'>
      <p>I'm Juan Manuel Flores Martin,<br />
      I worked for almost 5 years in the hospitality, more specifically as a Chef, it was a good experience and 
      I learned many things, but one day I saw myself in a mirror and I did not see myself working as a Chef 
      all my life, I have always liked computers and I have many friends who work as developers and 
      they recommended me the bootcamp that I did and here I am changing my life and I want to learn and 
      improve both in the work and in the personal. I am motivated and eager to start in this industry to be able 
      to learn and improve every day. I hope that I can prove my worth and my desire to contribute to a team 
      in the work environment.
      I am an ambitious person, I always want to improve, 
      learn and not stay stuck in the same position for the rest of my life within a company.</p>
     </div>
    </div><br />
      </div>
      <div className='anco-links'>
        <a target="_blank" href="https://github.com/Coladero"><ion-icon name="logo-linkedin"></ion-icon>Linkedin</a>
        <a target="_blank" href="https://www.linkedin.com/in/juan-manuel-flores-martin/"><ion-icon name="logo-github"></ion-icon>Github</a>
      </div>
      <div className='data-personal'>
        <h3>date of birthday: 30/07/1989</h3>
        <h3>Nationality: Spanish</h3>
        <h3>Country: Spain</h3>
      </div>
      <div>

      </div>
    </div>
  )
}

export default About