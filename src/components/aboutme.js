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
                  I started web development 2 years ago. I basically use MERN Stack for my websites,
                  I learned MERN Stack 1 year ago and worked on 2-3 different projects based on it.
                  I like to explore new projects and always want to contribute to them which helps me grow my skills efficiently.
                  My main focus is to learn algorithms and apply them in real-life projects which will enhance my skills.
                  I am also part of some coding clubs of my institute such as ACM KIIT and GFG KIIT, at GFG KIIT 
                  I am leading web development department where I and my team are working on various projects which are also helping me to grow in this field.
               </p>
               <a href="https://drive.google.com/file/d/1Ir4Fq6gFPEg3Enywa8genJKwkhrWJc8O/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="code_button"><i class="fas fa-download"></i> Resume</a>
            </div>
        </div>
      )
   }
}

export default aboutme;