import React from 'react'
import '../../Styles/title.css';
import CV from '../../Assets/CV-2022.pdf'
 
export default function Main() {

  return (
    <>
    <div className="title">
      <div className="titleDescription animated animatedFadeInUp fadeInUp">
      <div className="title-design">
      {/* <div className="title-bar-1">div
      </div>
      <div className="title-bar-2">div
      </div>
      <div className="title-bar-3">div
      </div>
      <div className="title-bar-4">div
      </div>
      <div className="title-bar-5">div
      </div> */}
    </div>
    <br></br>
        <p className="titleOneline">Junior Software Engineer</p>
        <p className="titleOneline">PPC Account Manager <a href="https://twitter.com/HavasMediaGroup">@Havas Media Group</a></p>
        <p className="titleOneline">Graduate Full-Stack Web Developer <a href="https://www.getfutureproof.co.uk/">@futureproof</a></p>
        <br></br>
        <a href={CV} className="cv-link" download>Download my CV</a>
      </div>
    </div>
    </>
  )
}
 
