import React from 'react';
import './App.css';
import Event from './Event';
import illustration from './img/events1.jpg';
import Header from "./Header";
import Footer from "./Footer"


function Info(){
  return(
    <div>
    <div style={{ fontWeight:'1000px', fontSize:'60px',paddingTop:'200px', paddingLeft: '60px'}}><b>EVENTS</b></div>
  </div>
  );
}

function Image(){
  return(
    <div style={{ left:'60%',position:'absolute'}}><img src={illustration} style={{maxWidth:'120%', maxHeight:'100%'}}/></div>
  );
}


function App() {
  return (
    <div>
      <div style={{padding:'105px' ,width: '100%'} }>
        <div style={{position:'relative'}}>
          <div class='row' >
            <Header />
            <Info />
            <Image />
            
          </div>
        </div>
      </div>
      
      <br />
      <br />
      
      <div style={{textAlign:'center', fontWeight:'1000px', fontSize:'60px', marginTop:'200px'}}><b>UPCOMING EVENTS</b></div>
      <div style={{textAlign:'center', fontSize:'20px'}}>Check out the upcoming events we have in store for you!</div>
      <br />
      <div> 
          <hr className='hr' style={{width: '80vw'}}/>
      </div>
      <div className="container">
        <Event date='Dec - Jan' name='Online Workshop' event='Open Workshop' info='Covers right from the basic to an advanced Nodejs Level.'/>
        <Event date='27th Oct - 26th Nov' name='CreatiWFacts' event='Open Event' info='An online event in which the society posts the basic functions and usage of all the photoshop tools.'/>
        <Event date='11th Nov - 15th Nov' name='Digital Arts Competition' event='Open Competition' info='The society organises a design competition on the occasion of National Education Day.'/>
        <Event date='27th June' name='Web UI Workshop' event='Closed Webinar' info='A webinar conductd in collaboration with Eeveno. The webinar covers Basics of Prototyping, Responsive grids, components states and naming conventions . '/>
        <Event date='21st May - 1st June' name='Online Workshop on PHP MySQL' event='Open Workshop' info='A 12 day online workshop in which the members post the resources sufficient enough to gain basic knowledge on HTML, CSS, Bootstrap, PHP and MySQL.'/>
      </div>
      <br></br>
      <Footer />
    </div>
    
  );
}

export default App;
