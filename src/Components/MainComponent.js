import React, { Component } from 'react';

import Design from './design';
import Web from './web';
import Showcase from './showcase';
import { Switch, Route, Redirect } from 'react-router-dom';
import { render } from '@testing-library/react';


class Main extends Component{
  constructor(props){
   super(props);
   this.state={

   }
}
   render() {
       return(
      <div>
        
      <Web />
      <Design />
      
      </div> 
       )
   }
  

}

export default Main;
  