import React , { Component} from 'react';
import KIIT from '../img/kiitlogo.png';
import VVRS from '../img/vvrslogo.jfif';
import BPS from '../img/bpslogo.png';
import GFG from '../img/gfg.png';
import GENESIS from '../img/genesis.jpg';
import ACM from '../img/acm.jfif';
import '../css/journey.css';

class journey extends Component {
   render(){
      return (
        <div className="journey" id="journey">
            <div className="journey_title">JOURNEY</div>
            <div className="journey_sub_division">
                <div className="journey_sub_title">Education</div>
                <div className="timeline">
                    <a href="https://kiit.ac.in/" target="_blank" rel="noopener noreferrer"><img src={KIIT} alt="logo" class="timeline_logo"/></a>
                    <div className="line"></div>
                    <a href="https://www.vidyavihar.org/" target="_blank" rel="noopener noreferrer"><img src={VVRS} alt="logo" class="timeline_logo"/></a>
                    <div className="line"></div>
                    <a href="https://bpspurnea.com/" target="_blank" rel="noopener noreferrer"><img src={BPS} alt="logo" class="timeline_logo"/></a>
                </div>
                <div className="timeline_detail_kiit">
                    <div className="institute_title">Kalinga Institute of Industrial Technology,</div>
                    <div className="institute_location">Bhubaneshwar, Odisha, India.</div>
                    <li className="details">Pursuing B-tech in Information Technology</li>
                    <li className="details">Batch : 2019 - 2023</li>
                </div>
                <div className="timeline_detail_vvrs">
                    <div className="institute_title">Vidya Vihar Residential School,</div>
                    <div className="institute_location">Purnea, Bihar, India.</div>
                    <li className="details">Senior Secondary Education,CBSE</li>
                    <li className="details">Batch : 2016 - 2018</li>
                    <li className="details">Stream : PCM + Computer Science</li>
                    <li className="details">Percentage : 73.4%</li>
                </div>
                <div className="timeline_detail_bps">
                    <div className="institute_title">Bijendra Public School,</div>
                    <div className="institute_location">Purnea, Bihar, India.</div>
                    <li className="details">Secondary Education,CBSE</li>
                    <li className="details">Batch : 2014 - 2016</li>
                    <li className="details">CGPA : 10 (i.e. 95%)</li>
                </div>
            </div>
            <div className="journey_sub_division_exp">
                <div className="journey_sub_title">Experience</div>
                <div className="timeline">
                    <a href="https://instagram.com/gfg_kiit_club?igshid=jepmf9o4x2p0" target="_blank" rel="noopener noreferrer"><img src={GFG} alt="logo" class="timeline_logo"/></a>
                    <div className="line"></div>
                    <a href="https://instagram.com/genesis.journey?igshid=1lbfzyfu3zztj" target="_blank" rel="noopener noreferrer"><img src={GENESIS} alt="logo" class="timeline_logo"/></a>
                    <div className="line"></div>
                    <a href="https://instagram.com/kiitacm?igshid=yv6pu5g8l5ua" target="_blank" rel="noopener noreferrer"><img src={ACM} alt="logo" class="timeline_logo"/></a>
                </div>
                <div className="timeline_detail_kiit">
                    <div className="institute_title">Geeksforgeeks KIIT Student Chapter</div>
                    <div className="institute_location">Web Dev. Lead</div>
                    <li className="details">Nov,2020 - Present</li>
                    <li className="details">Lead team to Built GFG KIIT 1<sup>st</sup> Web Dev. Project</li>
                </div>
                <div className="timeline_detail_genesis">
                    <div className="institute_title">Genesis</div>
                    <div className="institute_location">Founder</div>
                    <li className="details">Senior Secondary Education,CBSE</li>
                    <li className="details">June,2020 - Present</li>
                </div>
                <div className="timeline_detail_acm">
                    <div className="institute_title">KIIT ACM Student Chapter</div>
                    <div className="institute_location">Competetive Programmer</div>
                    <li className="details">Feb,2020 - Present</li>
                </div>
            </div>
        </div>
       )
    }
}

export default journey;