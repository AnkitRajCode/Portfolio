import React , { Component} from 'react';
import C from '../icons/C.webp';
import CPLUS from '../icons/C++.png';
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
import FIREBASE from '../icons/firebase.png';
import ADOBEXD from '../icons/adobeXD.png';
import GIT from '../icons/git.png';
import EXPRESS from '../icons/expressjs.png';
import POSTMAN from '../icons/postman.png';
import NETLIFY from '../icons/netlify.png';
import '../css/techTool.css';


class tech_tools extends Component {
   render(){
      return (
        <div className="tech_tool" id="tech_tool">
            <div className="tech_tool_title">Tech. and Tools I use</div>
            <a href="https://devdocs.io/c/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={C} alt="tech_tools" className="tech_logo" /><span className="title_track">C</span></a>
            <a href="https://devdocs.io/cpp/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={CPLUS} alt="tech_tools" className="tech_logo" /><span className="title_track">C++</span></a>
            <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={HTML} alt="tech_tools" className="tech_logo" /><span className="title_track">HTML 5</span></a>
            <a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={CSS} alt="tech_tools" className="tech_logo" /><span className="title_track">CSS 3</span></a>
            <a href="https://sass-lang.com/documentation/syntax" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={SASS} alt="tech_tools" className="tech_logo" /><span className="title_track">Sass</span></a>
            <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={BOOTSTRAP} alt="tech_tools" className="tech_logo" /><span className="title_track">Bootstrap</span></a>
            <a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={JAVASCRIPT} alt="tech_tools" className="tech_logo" /><span className="title_track">JavaScript</span></a>
            <a href="https://www.w3schools.com/jquery/default.asp" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={JQUERY} alt="tech_tools" className="tech_logo" /><span className="title_track">jQuery</span></a>
            <a href="https://nodejs.org/en/docs/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={NODE} alt="tech_tools" className="tech_logo" /><span className="title_track">Node Js</span></a>
            <a href="https://devdocs.io/express/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={EXPRESS} alt="tech_tools" className="tech_logo" /><span className="title_track">Express Js</span></a>
            <a href="https://reactjs.org/tutorial/tutorial.html" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={REACT} alt="tech_tools" className="tech_logo" /><span className="title_track">React Js</span></a>
            <a href="https://docs.mongodb.com/drivers/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={MONGODB} alt="tech_tools" className="tech_logo" /><span className="title_track">MongoDB</span></a>
            <a href="https://dev.mysql.com/doc/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={MYSQL} alt="tech_tools" className="tech_logo" /><span className="title_track">MySQL</span></a>
            <a href="https://firebase.google.com/docs/guides" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={FIREBASE} alt="tech_tools" className="tech_logo" /><span className="title_track">FIREBASE</span></a>
            <a href="https://www.adobe.com/in/products/xd.html?sdid=12B9F15S&mv=Search&ef_id=Cj0KCQiAx9mABhD0ARIsAEfpavTOtZsSWvwIbCQE-MRMvKzJlVMGkZOzf463TBGk-H_viInR13GXJ5waAjdbEALw_wcB:G:s&s_kwcid=AL!3085!3!394015010050!e!!g!!adobe%20xd!1641846448!65452677551" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={ADOBEXD} alt="tech_tools" className="tech_logo" /><span className="title_track">Adobe XD</span></a>
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={GIT} alt="tech_tools" className="tech_logo" /><span className="title_track">Git</span></a>
            <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={POSTMAN} alt="tech_tools" className="tech_logo" /><span className="title_track">Postman</span></a>
            <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer" className="lang_card"><img src={NETLIFY} alt="tech_tools" className="tech_logo" /><span className="title_track">Netlify</span></a>
        </div>
      )
   }
}

export default tech_tools;