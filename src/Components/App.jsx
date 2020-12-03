import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import  Home  from "./home";
import Events from "./Events"
import Showcase from "./Show"

export default class App extends Component {
  
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Route exact path='/' component={Home}/>  
            <Route exact path='/events' component={Events}/>
            <Route exact path='/showcase' component={Showcase}/>
          </div>
        </BrowserRouter>
    )
  }
}