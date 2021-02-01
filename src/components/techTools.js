import React , { Component} from 'react';
import C from '../icons/C.webp';
import CPLUS from '../icons/C++.png';
import JAVA from '../icons/java.png';
import HTML from '../icons/html.png';
import CSS from '../icons/css.png';
import SASS from '../icons/sass.png';
import BOOTSTRAP from '../icons/bootstrap.png';
import JAVASCRIPT from '../icons/javaScript.png';
import JQUERY from '../icons/jquery.webp';
import NODE from '../icons/nodejs.png';
import REACT from '../icons/react.png';
import MONGODB from '../icons/mongodb.png';
import MYSQL from '../icons/mysql.png';
import ADOBEXD from '../icons/adobeXD.png';
import GIT from '../icons/git.png';
import VSCODE from '../icons/vsCode.png';
import POSTMAN from '../icons/postman.png';
import NETLIFY from '../icons/netlify.png';
import '../css/techTool.css';


class tech_tools extends Component {
   render(){
      return (
        <div className="tech_tool" id="tech_tool">
            <div className="tech_tool_title">Tech. and Tools I use</div>
            <a href="https://devdocs.io/c/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={C} alt="tech_tools" className="tech_logo" /><lable className="title_track">C</lable></a>
            <a href="https://devdocs.io/cpp/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={CPLUS} alt="tech_tools" className="tech_logo" /><lable className="title_track">C++</lable></a>
            <a href="https://www.tutorialspoint.com/java/java_documentation.htm" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={JAVA} alt="tech_tools" className="tech_logo" /><lable className="title_track">Java</lable></a>
            <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={HTML} alt="tech_tools" className="tech_logo" /><lable className="title_track">HTML 5</lable></a>
            <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={CSS} alt="tech_tools" className="tech_logo" /><lable className="title_track">CSS 3</lable></a>
            <a href="https://sass-lang.com/documentation/syntax" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={SASS} alt="tech_tools" className="tech_logo" /><lable className="title_track">Sass</lable></a>
            <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={BOOTSTRAP} alt="tech_tools" className="tech_logo" /><lable className="title_track">Bootstrap</lable></a>
            <a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={JAVASCRIPT} alt="tech_tools" className="tech_logo" /><lable className="title_track">JavaScript</lable></a>
            <a href="https://www.w3schools.com/jquery/default.asp" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={JQUERY} alt="tech_tools" className="tech_logo" /><lable className="title_track">jQuery</lable></a>
            <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={NODE} alt="tech_tools" className="tech_logo" /><lable className="title_track">Node Js</lable></a>
            <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={REACT} alt="tech_tools" className="tech_logo" /><lable className="title_track">React Js</lable></a>
            <a href="https://docs.mongodb.com/drivers/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={MONGODB} alt="tech_tools" className="tech_logo" /><lable className="title_track">MongoDB</lable></a>
            <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={MYSQL} alt="tech_tools" className="tech_logo" /><lable className="title_track">MySQL</lable></a>
            <a href="https://www.adobe.com/in/products/xd.html?sdid=12B9F15S&mv=Search&ef_id=Cj0KCQiAx9mABhD0ARIsAEfpavTOtZsSWvwIbCQE-MRMvKzJlVMGkZOzf463TBGk-H_viInR13GXJ5waAjdbEALw_wcB:G:s&s_kwcid=AL!3085!3!394015010050!e!!g!!adobe%20xd!1641846448!65452677551" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={ADOBEXD} alt="tech_tools" className="tech_logo" /><lable className="title_track">Adobe XD</lable></a>
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={GIT} alt="tech_tools" className="tech_logo" /><lable className="title_track">Git</lable></a>
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={VSCODE} alt="tech_tools" className="tech_logo" /><lable className="title_track">vsCode</lable></a>
            <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={POSTMAN} alt="tech_tools" className="tech_logo" /><lable className="title_track">Postman</lable></a>
            <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={NETLIFY} alt="tech_tools" className="tech_logo" /><lable className="title_track">Netlify</lable></a>
        </div>
      )
   }
}

export default tech_tools;