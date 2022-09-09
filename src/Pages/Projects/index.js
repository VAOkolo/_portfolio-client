import React from 'react'
import { ProjectCard } from '../../Components'
import '../../Styles/projects.css'
import '../../'
export default function Projects() {

    let projects = [{
        title: "I Doodle",
        description: "IDoodle is a full stack application utilising Socket.io and Canvas. Join a room with your friends, choose settings, then take turns to draw and guess to earn points and place youself on the real-time leaderboard!",
        img: "images/idoodle.png",
        githubLink: "https://github.com/VAOkolo/_IDoodle-client",
        link: "https://idoodle-main.netlify.app/"
    },{
        title: "Panda Plog",
        description: "An anonymous blog site based on 'telegra.ph' using vanilla javascript, Bootstrap and Express. This application was an exercise in setting up full CRUD functionality.",
        img: "images/pandaplog.png",
        githubLink: "https://github.com/VAOkolo/_telegraphclone-server",
        link: "https://panda-plog.netlify.app/"
    },{
        title: "Github Repo Hunter",
        description: "A search engine for Github repos, displaying relevant information on the input of a relevant username. Project utilises React, React Bootstrap and Github's public API",
        img: "images/githubrepohunter.png",
        githubLink: "https://github.com/VAOkolo/_githubclonereact",
        link: "https://github-rep0-hunter.netlify.app/"
    },{
        title: "Google Clone - Foogler",
        description: "A Google Clone using HTML5, vanilla JS and CSS. Functionality includes allowing users to make searches to a local database and 'Google's Custom Search JSON API' to render relevant searches. This version only has API functionality. Navigate to 'Settings' in the footer and 'Search Google API' to enable that functionality",
        img: "images/foogler.png",
        githubLink: "https://github.com/VAOkolo/_googleclone-client",
        link: "https://foogler.netlify.app/"
    }]

  return (
    <>
    <h1 className="project-title">Have a look at some of my most recent projects below:</h1>
    <div className="project-container">
    {projects ? projects.map((project) => (
        <ProjectCard project={project} />
        )) : <div>No projects available</div>}
    </div>
    </>
  )
}
