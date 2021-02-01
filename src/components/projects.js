import React , { Component} from 'react';
import REPO from '../icons/repo.png';
import HTML from '../icons/html.png';
import CSS from '../icons/css.png';
import JAVASCRIPT from '../icons/javaScript.png';
import REACT from '../icons/react.png';
import '../css/projects.css';


class projects extends Component {
   render(){
      return (
        <div className="projects" id="project">
            <div className="projects_title">Projects</div>
            <div className="project_card">
                <a href="https://gfgkiit.netlify.app" target="_blank" rel="noopener noreferrer" className="project_title"> <img src={REPO} alt="Repo" className="project_git_repo" /> Geeksforgeeks KIIT</a>
                <div className="project_date">2nd Dec,2020</div>
                <div className="project_content">This project is my first project as a Team Lead.In this project we totally focused on better user experience and better features.</div>
                <a href="https://github.com/GFG-CLUB-KIIT/GFG-KIIT-website" target="_blank" rel="noopener noreferrer" className="code_button">&#60;&#x2f;&#62; Code</a>
                <div class="project_language">
                    <img src={REACT} alt="TechLogo" className="project_tech_logo"/>
                    <img src={JAVASCRIPT} alt="TechLogo" className="project_tech_logo"/>
                    <img src={CSS} alt="TechLogo" className="project_tech_logo"/>
                    <img src={HTML} alt="TechLogo" className="project_tech_logo"/>
                </div>
            </div>
        </div>
       )
    }
}

export default projects;