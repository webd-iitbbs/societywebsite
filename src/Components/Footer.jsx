import React from "react";
import { SocialIcon } from 'react-social-icons';

function Footer(){
    return(
        <footer id="footer">

   

    <div className="footer-top">
      <div className="container">
        <div className="row justify-content-center">

         

          <div className="col-lg-4 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="300">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><i class="ion-ios-arrow-right"></i> <a href="/events">EVENTS</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="/showcase">SHOWCASE</a></li>
             
            </ul>
          </div>


          <div className="col-lg-4 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="300">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">IIT BHUBANESHWAR</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="#">STUDENTS GYMKHANA</a></li>
             
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-social-links" data-aos="fade-up" data-aos-delay="300">
            <h4>REACH US AT</h4>
           
            <div className="media mt-3">
             
              <a href="#"><SocialIcon url="http://facebook.com/webnd.iitbbs" bgColor="#3499FE" /></a>&nbsp;&nbsp;
              <a href="#"><SocialIcon url="http://instagram.com/webnd.iitbbs" bgColor="#51A2F3" /></a> &nbsp;&nbsp;
              <a href="#"><SocialIcon url="http://github.com/webd-iitbbs" bgColor="#51A2F3" /></a>  
            </div>
          </div>

        </div>
      </div>
    </div>

    
  </footer>
  
    )
}

export default Footer;