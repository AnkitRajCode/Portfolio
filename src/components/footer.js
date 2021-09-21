import React , { Component} from 'react';
import whatsapp from '../icons/whatsapp.png';
import gmail from '../icons/gmail.png';
import facebook from '../icons/facebook.png';
import instagram from '../icons/instagram.png';
import twitter from '../icons/twitter.png';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.png';
import '../css/footer.css'

class footer extends Component {
   render(){
      return (
         <div className="footer" id="contact">
            <div className="Collaboration">
               <div className="collab_title">For Collaboration</div>
               <a href="tel:+919431231375" className="collab_detail">
                  <span className="collab_tel">Tel :</span> +91 9431231375 
                  <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=+919431231375&text=Hi,%20I%20would%20like%20to%20Collabrate%20with%20you.." className="redirect_whatsapp">
                     <img src={whatsapp} alt="whatsapp logo" className="whatsapp_logo"/> Whatsapp</a>
               </a>
               <a href="mailto:rajankit432@gmail.com?subject=Hey,%20Ankit%20Raj" className="collab_detail">
                  <span className="collab_email">Email: </span>rajankit432@gmail.com
               </a>
            </div>
            <div id="footer_line"></div>
            <div className="copyright">
               <div>
                  <a href="https://www.facebook.com/profile.php?id=100008053720762" target="_blank" rel="noopener noreferrer" title="Facebook"><img src={facebook}  alt="socialMediaLogo" className="social_media_logo"/></a>
                  <a href="https://instagram.com/ankit_r.a.j?igshid=895xw0qgqmx2" target="_blank" rel="noopener noreferrer" title="Instagram"><img src={instagram}  alt="socialMediaLogo" className="social_media_logo"/></a>
                  <a href="https://twitter.com/ankit__raj__?s=08" target="_blank" rel="noopener noreferrer" title="Twitter"><img src={twitter}  alt="socialMediaLogo" className="social_media_logo"/></a>
                  <a href="https://www.linkedin.com/in/ankit-raj-a3405b1b0" target="_blank" rel="noopener noreferrer" title="Linkedin"><img src={linkedin}  alt="socialMediaLogo" className="social_media_logo"/></a>
                  <a href="https://github.com/AnkitRajCode" target="_blank" rel="noopener noreferrer" title="Github"><img src={github}  alt="socialMediaLogo" className="social_media_logo"/></a>
                  <a href="mailto:rajankit432@gmail.com?subject=Hey,%20Ankit%20Raj" target="_blank" rel="noopener noreferrer" title="Gmail"><img src={gmail}  alt="socialMediaLogo" className="social_media_logo"/></a>
               </div><br />
               <div className="copyright_text">All the information given above are 100% correct.</div>
               <div className="copyright_logo">AnkitRaj &#xa9; 2021</div>
            </div>
         </div>
      )
   }
}

export default footer;