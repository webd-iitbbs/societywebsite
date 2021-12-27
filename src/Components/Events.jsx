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
        <Event date='22nd June 2022' name='Portfolio Website Development Competition' event='Open Competition' info='A competition for students of IITBBS to design and develop a portfolio website'/>
        <Event date='Dec - Jan' name='CreatiwFacts2' event='Open Event' info='An online event in which the society posts the basic functions and usage of all the Adobe XD tools.'/>
        <Event date='January 2022' name='React JS Workshop' event='Open Workshop' info='A workshop on React JS, it`s fundamentals and usage'/>
        <Event date='January 2022' name='Node JS Workshop' event='Open Workshop' info='A workshop on Node JS, it`s fundamentals and usage'/>
        <Event date='January 2022' name='Pan IIT Website Development Competition' event='Open Competition' info='A competition where students from IITs all over India will participate'/>
        
      </div>
      <br></br>
      <Footer />
    </div>
    
  );
}

export default App;
