import React from 'react'
import "./About.css"
import Sea from "../../Img/sea.jpg"
const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Sea} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">I´ve decided to change my career path a year ago and jumped in the field of Fullstack Web Development.
</p>
                <p className="a-desk">Helping companies reaching their goals by having a solid website is my passion and as my next career step I want to find a company where I can combine both: bringing in my experience + newly gained knowledge and expand my experiences.</p>

            </div>
        </div>
    )
}

export default About
