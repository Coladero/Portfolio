import React from 'react'
import "../css/skills.css"
import mongo from "../images/pngwing.com.png"

function Skills() {
  return (
    <div id='skills'>
    
    <h2>My coding journey 2022...</h2>
    <div className='container-skills'>
    <div className='skills-group'>
    <label htmlFor=""><p> 2022 Javascripts</p></label>
    <ion-icon name="logo-javascript"></ion-icon>
    </div>
    <div className='skills-group'>
    <label htmlFor=""><p> 2022 HTML</p></label>
    <ion-icon name="logo-html5"></ion-icon>
    </div>
    <div className='skills-group'>
    <label htmlFor=""><p> 2022 CSS</p></label>
    <ion-icon name="logo-css3"></ion-icon>
    </div>
    <div className='skills-group'>
    <label htmlFor=""><p>2022 React</p></label>
    <ion-icon name="logo-react"></ion-icon>
    </div>
    <div className='skills-group'>
    <label htmlFor=""><p>2022 Nodejs</p></label>
    <ion-icon name="logo-nodejs"></ion-icon>
    </div>
    <div className='skills-group'>
    <label htmlFor=""><p>2022 MongoDB</p></label>
    <img width="10px" height="15px" src={mongo} alt="mongo" />
    </div>
    </div>
    
    </div>
  )
}

export default Skills