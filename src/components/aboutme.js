import React , { Component} from 'react';
import '../css/aboutme.css'

class aboutme extends Component {
   render(){
      return (
         <div className="about_me" id="aboutme">
            <div className="my_dp"></div>
            <div className="intro">
               <div className="intro_title">Full Stack Web Developer</div>
               <p className="intro_details">
                  I started web development 3 years ago. 
                  I basically use MERN Stack for my websites and worked on various projects based on it.
                  I like to explore new projects and always want to contribute to them which helps me grow my skills efficiently.
                  My main focus is to learn algorithms and new technology and apply them in real-life projects which will enhance my skills.
                  I was also part of some coding clubs of my institute such as ACM KIIT and GFG KIIT. 
                  At GFG KIIT I was head of web dev. domain, where I and my teammates worked on various projects.
               </p>
               <a href="https://drive.google.com/file/d/1HLjPJ__YNFGtsdAL0yn7lzwl0yaFymqk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="code_button"><i className="fas fa-download"></i> Resume</a>
            </div>
        </div>
      )
   }
}

export default aboutme;