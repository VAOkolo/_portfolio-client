import React from 'react'
import '../../Styles/profile.css'

export default function Skills() {
  return (
    <div className="about-me-container">
    <h2>Skills</h2>
    <div className="skills-container">
        <div className="technical-skills">
            <h3>Technical</h3>
            <ul>
                <li>HTML/CSS/Javascript</li>
                <li>NodeJS</li>
                <li>React</li>
                <li>Python</li>
                <li>MongoDB/Postgres</li>
                <li>Django/Flask</li>
                <li>Docker</li>
                <li>Bootstrap</li>
            </ul>
        </div>
        <div className='advertising-skills'>
            <h3>Digital Marketing</h3>
            <ul>
                <li>Google Ads</li>
                <li>Search Ads 360</li>
                <li>Google Ad Scripts</li>
                <li>Bing Ads</li>
                <li>Amazon Marketing Services</li>
                <li>Google Analytics</li>
                <li>Google Data Studio</li>
                <li>Power BI</li>
            </ul>
        </div>
        <div className="soft=skills">
            <h3>Soft</h3>
            <ul>
                <li>Committed to excellence</li>
                <li>Team player</li>
                <li>Diplomatic</li>
                <li>Reflective & Self aware</li>
            </ul>
        </div>
    </div>
    </div>
  )
}
