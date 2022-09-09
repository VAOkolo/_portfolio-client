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
            
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            Previously, I worked at Works Applications, Singapore as a Software Engineer, where I worked on delivering libraries, microservices and distributed multi-tenant architecture to thousands of developers inside the company who utilized them to build various products for our customers. Aside from work, I am also an open-source enthusiast and have created projects that were listed in GitHub trending.

            Aside from work, I am also an open-source enthusiast and have created projects that were listed in GitHub trending.</p>
        </div>
        </div>
    </div>
    </>
  )
}
