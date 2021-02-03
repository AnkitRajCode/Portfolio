import React , { Component} from 'react';
import REPO from '../icons/repo.png';
import HTML from '../icons/html.png';
import CSS from '../icons/css.png';
import JAVASCRIPT from '../icons/javaScript.png';
import NPM from '../icons/npm.png';
import REACT from '../icons/react.png';
import '../css/projects.css';


class projects extends Component {
   render(){
      return (
        <div className="projects" id="project">
            <div className="projects_title">Projects</div>
            <div className="project_card">
                <a href="https://ankitraj.netlify.app" target="_blank" rel="noopener noreferrer" className="project_title"> <img src={REPO} alt="Repo" className="project_git_repo" /> My Portfolio</a>
                <div className="project_date">31<sup>st</sup> Jan,2021</div>
                <div className="project_content">Portfolios are a great way to demonstrate the competencies we would list on our resume they allow us to show and not just tell. Portfolio showcase our work potentail.</div>
                <a href="https://github.com/AnkitRajCode/portfolio" target="_blank" rel="noopener noreferrer" className="code_button">&#60;&#x2f;&#62; Code</a>
                <div class="project_language">
                    <img src={NPM} alt="TechLogo" className="project_tech_logo" title="npm"/>
                    <img src={REACT} alt="TechLogo" className="project_tech_logo" title="React Js"/>
                    <img src={CSS} alt="TechLogo" className="project_tech_logo" title="CSS"/>
                    <img src={HTML} alt="TechLogo" className="project_tech_logo" title="HTML"/>
                </div>
            </div>
            <div className="project_card2">
                <a href="https://gfgkiit.netlify.app" target="_blank" rel="noopener noreferrer" className="project_title"> <img src={REPO} alt="Repo" className="project_git_repo" /> Geeksforgeeks KIIT</a>
                <div className="project_date">2<sup>nd</sup> Dec,2020</div>
                <div className="project_content">This project is my first project as a Team Lead.In this project we totally focused on better user experience and user intreaction. This site is Under Process*.</div>
                <a href="https://github.com/GFG-CLUB-KIIT/GFG-KIIT-website" target="_blank" rel="noopener noreferrer" className="code_button">&#60;&#x2f;&#62; Code</a>
                <div class="project_language">
                    <img src={REACT} alt="TechLogo" className="project_tech_logo" title="React Js"/>
                    <img src={JAVASCRIPT} alt="TechLogo" className="project_tech_logo" title="JavaScript"/>
                    <img src={CSS} alt="TechLogo" className="project_tech_logo" title="CSS"/>
                    <img src={HTML} alt="TechLogo" className="project_tech_logo" title="HTML"/>
                </div>
            </div>
        </div>
       )
    }
}

export default projects;