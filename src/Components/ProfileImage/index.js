import React from 'react'
import Profile from '../../Assets/vincent.jpeg'
import '../../Styles/profile.css'

export default function ProfileImage() {
  return (
    <>
    <div className="about-me-container">
    <h2>About Me</h2>
    <div className="profile-image-container">
        <div>
            <img className="profile-image" src={Profile} alt=""></img>
        </div>
        <div className="profile-image-text">


            <p>Hey! I'm Vincent, a digital marketer and aspiring software developer. My professional experiences to date were the key motivator for giving software development a go. As a person who aspires to perform to a high standard in any role I take on, the prospect of automating workflows through technology to maximize my impact was something that excited me, motivated me and gave me the impetus to improve my coding skills in an intense 13 week bootcamp with Futureproof.</p>
            <br></br>
            
            <p>What was just seen as a method of improving my performance on the job, turned into a realisation that technology was a career path that not only could I commit to, but had an aptitude for. Working in agile teams delivering product has been some of the most exciting, stretching and fulfilling times I've had professionally and I'm very eager to enter into a commercial context where I can further develop my skills.</p>

            <br></br>
            <p>If asked I would say that my strengths and interests are in stiching together the functionality between the front and backend. Points of development that I'm currently looking at are project planning and optimising project file structures to prevent redundancies in my codebase (which tend to emerge when you have to finish projects in 1 week sprints!)</p>

        </div>
        </div>
    </div>
    </>
  )
}
