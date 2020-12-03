import React from "react";
import image from './img/illustration.jpg';
import image1 from './img/illustration1.jpg';


function About(){
    return(
        <main id="main">

   

    <section id="details" class="details">
      <div className="container">

        <div className="row content">
          <div className="col-md-4" data-aos="fade-right">
            <img src={image} class="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-4" id="who" data-aos="fade-left">
            <h3>WHO ARE WE</h3>
            <br />
            <p>
            The Web and Design Society of IIT Bhubaneswar has the credit of managing and designing all the websites of the institute and also banners and posters for many events of the institute .
            Though it majorly acts away from the limelight, it transforms its members into creative professionals by equipping them with the skill and art of creating websites and club designs.
             Members of the society actively conduct workshops and competitions for beginners as well as advanced web designers.
            </p>
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">EVENTS</span>
            </button>
          </div>
        </div>

        <div className="row content">
          <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <img src={image1} class="img-fluid" alt="" />
          </div>
          <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-right">
            <h3>WHAT DO WE DO</h3>
            <br />
            <p>
            The Web and Design Society of IIT Bhubaneswar has the credit of managing and designing all the websites of the institute and also banners and posters for many events of the institute .
            Though it majorly acts away from the limelight, it transforms its members into creative professionals by equipping them with the skill and art of creating websites and club designs.
             Members of the society actively conduct workshops and competitions for beginners as well as advanced web designers.
            </p>
            
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">SHOWCASE</span>
            </button>
          </div>
        </div>
        </div>

        
    </section>

  
    

  </main>
    )
}

export default About;