import React , { Component} from 'react';
import Typewriter from 'typewriter-effect';
import Particles from 'particles-bg';
import '../css/header.css';
import {Link} from 'react-scroll';

class header extends Component {
   componentDidMount(){
      let burger=document.getElementById("burger-menu");
        let navCheck= document.getElementById("check");
      navCheck.addEventListener("click", ()=>{
         
         if(burger.classList.contains("fa-bars")===true){
               burger.classList.remove("fa-bars");
               burger.classList.add("fa-times");
             burger.style.color="white";
         }
          else{
              burger.classList.remove("fa-times");
               burger.classList.add("fa-bars");
          }
      });
   }
   render(){
      return (
         <div className="header" id="header" >
            <nav>
               <input type="checkbox" id = "check"/>
               <label for = "check" className="checkbtn nav_checkbtn">
                  <i class="fas fa-bars"  id="burger-menu"></i>
               </label>
               <ul>
                  <li><Link to="aboutme" smooth={true} duration={1000} >About me</Link></li>
                  <li><Link to="tech_tool" smooth={true} duration={1000} >Tech & Tools</Link></li>
                  <li><Link to="projects" smooth={true} duration={1000} >Projects</Link></li>
                  <li><Link to="journey" smooth={true} duration={1000} >Journey</Link></li>
                  <li><Link to="contact" smooth={true} duration={1000} >Contact</Link></li>
               </ul>
               <Link to="header" smooth={true} duration={1000} className="nav_logo"></Link>
            </nav>
            <Particles color="#d400ff" type="cobweb" />
            <div className="typingEffect">
               <Typewriter
               onInit={(typewriter)=>{
                  typewriter.typeString("<strong>Hello,<br>I m Ankit Raj.</strong>")
                  .start();
               }}
               
               />
            </div>
         </div>
      )
   }
}

export default header;