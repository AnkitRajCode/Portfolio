import React , { Component} from 'react';
import REPO from '../icons/repo.png';
import HTML from '../icons/html.png';
import CSS from '../icons/css.png';
import JAVASCRIPT from '../icons/javaScript.png';
import NPM from '../icons/npm.png';
import REACT from '../icons/react.png';
import FIREBASE from '../icons/firebase.png';
import '../css/projects.css';


class projects extends Component {
   render(){
      return (
        <div className="projects" id="project">
            <div className="projects_title">Projects</div>
            <div className="project_card">
                <a href="https://ankitraj.netlify.app" target="_blank" rel="noopener noreferrer" className="project_title"> <img src={REPO} alt="Repo" className="project_git_repo" /> My Portfolio</a>
                <div className="project_date">31<sup>st</sup> Jan,2021 (Released)</div>
                <div className="project_content">Portfolio's are a great way to demonstrate the competencies we would list on our resume . Portfolio help us to showcase our work potentials and learnings.</div>
                <a href="https://github.com/AnkitRajCode/portfolio" target="_blank" rel="noopener noreferrer" className="code_button">&#60;&#x2f;&#62; Code</a>
                <div className="project_language">
                    <img src={NPM} alt="TechLogo" className="project_tech_logo" title="npm"/>
                    <img src={REACT} alt="TechLogo" className="project_tech_logo" title="React Js"/>
                    <img src={CSS} alt="TechLogo" className="project_tech_logo" title="CSS"/>
                    <img src={HTML} alt="TechLogo" className="project_tech_logo" title="HTML"/>
                </div>
            </div>
            <div className="project_card2">
                <a href="https://gfgkiit.netlify.app" target="_blank" rel="noopener noreferrer" className="project_title"> <img src={REPO} alt="Repo" className="project_git_repo" /> Geeksforgeeks KIIT</a>
                <div className="project_date">2<sup>nd</sup> December,2020 - 10<sup>th</sup> March,2021</div>
                <div className="project_content">This project is my first project as a Team Lead.In this project we totally focused on better user experience. In this site we put our club upcoming and past events and projects.</div>
                <a href="https://github.com/GFG-CLUB-KIIT/GFG-KIIT-website" target="_blank" rel="noopener noreferrer" className="code_button">&#60;&#x2f;&#62; Code</a>
                <div className="project_language">
                    <img src={REACT} alt="TechLogo" className="project_tech_logo" title="React Js"/>
                    <img src={JAVASCRIPT} alt="TechLogo" className="project_tech_logo" title="JavaScript"/>
                    <img src={CSS} alt="TechLogo" className="project_tech_logo" title="CSS"/>
                    <img src={HTML} alt="TechLogo" className="project_tech_logo" title="HTML"/>
                </div>
            </div>
            <div className="project_card">
                <a href="https://finkarma.in" target="_blank" rel="noopener noreferrer" className="project_title"> <img src={REPO} alt="Repo" className="project_git_repo" /> Finkarma</a>
                <div className="project_date">20<sup>th</sup> July,2021 - Present</div>
                <div className="project_content">This project is my first paid project. This website is for financial knowledge and daily happening around financial world. This website daily reach is around 1k and growing.</div>
                <a href="https://github.com/AnkitRajCode" target="_blank" rel="noopener noreferrer" className="code_button">&#60;&#x2f;&#62; Code</a>
                <div className="project_language">
                    <img src={NPM} alt="TechLogo" className="project_tech_logo" title="npm"/>
                    <img src={FIREBASE} alt="TechLogo" className="project_tech_logo" title="Firebase"/>
                    <img src={REACT} alt="TechLogo" className="project_tech_logo" title="React Js"/>
                    <img src={JAVASCRIPT} alt="TechLogo" className="project_tech_logo" title="JavaScript"/>
                </div>
            </div>
        </div>
       )
    }
}

export default projects;