import React from 'react'
import "./ProjectList.css"
import Project from "../Project/Project"
import { Projects } from "../../data"

const ProjectList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">My Projects</h1>
                <p className="pl-desc">Check Out My Work:</p>
            </div>
            <div className="pl-list">
                {Projects.map((item) => (
                    <Project key={item.id} img={item.img} link={item.link} />
                ))}


            </div>
        </div>
    )
}

export default ProjectList
