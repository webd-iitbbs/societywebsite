import React, {Component} from 'react';
import Main from './MainComponent';
import './show.css';
import { BrowserRouter } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import illustration from './img/showcase.jpg';

function Info(){
  return(
    <div lassName="row">
    <div style={{height:'100vh' , fontWeight:'1000px', fontSize:'60px',paddingTop:'300px', paddingLeft: '120px'}}><b>SHOWCASE</b></div>
    <div style={{ left:'50%',position:'absolute', top: '25%'}}><img src={illustration} style={{maxWidth:'100%', maxHeight:'100%'}} alt=""/></div>
  </div>
  );
}


class App extends Component  {

  
  render(){
    return (
      
      <BrowserRouter>
      <div className="App">
        <Header />
        <Info />
        <br></br>
        <br></br>
        
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
    
    );
  }
}

export default App;
