import React , { Component} from 'react';
import '../css/aboutme.css'


class aboutme extends Component {
   render(){
      return (
         <div className="about_me" id="aboutme">
               <div className="my_dp"></div>
            <div className="intro">
                <div className="intro_title">Full Stack Web Developer</div>
                <p className="intro_details">I started Web Development 2 years ago. Quas eum fugit, voluptatum nostrum sed at, ea repellat quaerat quae aut, hic ex alias. Quod aspernatur dignissimos molestias. Voluptatem assumenda tempore quidem officiis consequatur magni illo itaque soluta odio unde eum deserunt accusantium blanditiis aperiam harum totam odit, error sit perferendis eligendi alias. Impedit optio repudiandae minus praesentium natus facilis, debitis explicabo necessitatibus cum sint ducimus dignissimos! Et eum neque rem nobis possimus repudiandae perferendis similique dolorem illo ullam ex, non! Officia, reiciendis, repudiandae. Error at voluptas voluptatem sed laborum tempora debitis ipsa numquam, ad, omnis perspiciatis optio exercitationem labore facere!</p>
                <a href="../src/Resume.pdf" download="resume.pdf" className="code_button"><i class="fas fa-download"></i> Resume</a>
            </div>
        </div>
      )
   }
}

export default aboutme;