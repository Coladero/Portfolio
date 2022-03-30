import React from 'react'
import "../css/mywork.css"
import facepalm from "../images/app-web/facepalm.png"
import jhonkong from "../images/app-web/JhonKong.png"
import teragaming from "../images/app-web/teragaming.png"

function MyWork() {
  return (
    <div id='myWork'>

      <h2>Check this out...</h2>

      <div className='appWeb-container'>
        <a target="_blank" href="https://coladero.github.io/JhonKong/"><img width="150px" src={jhonkong} alt="" /></a>
        <a target="_blank" href="https://teragaming.herokuapp.com/"><img width="200px" src={teragaming} alt="" /></a>
        <a target="_blank" href=" https://facepalm.netlify.app"><img width="200px"  src={facepalm} alt="" /></a>
      </div>

    </div>
  )
}

export default MyWork