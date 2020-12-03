import React, { Component } from 'react';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, CardImg, CardImgOverlay
  } from 'reactstrap';
  import styles from './showcase.css';
  import { Link } from 'react-router-dom';
  
  

class Showcase extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    };
    render(){
        return(
         <div>
         
            <div className='row'>
              <div className='col-12'>
                <div className='d-flex justify-content-center'>
                <h1>Show Case</h1>
                </div>
                </div>
             <div className='col-3 offset-3 align-self-center'>
            
             <div className="total">
             <Link to='./web'>
      <Card >
      <CardImg  width="100%" src="https://sitegalleria.com/wp-content/uploads/2019/08/Web-Development-Company-Bangalore.jpeg" alt="Card image cap" />
      <CardImgOverlay>
        <CardTitle className='text-white'>web</CardTitle>
      </CardImgOverlay>
      </Card>
      </Link>
      </div>
      </div>


      <div className='col-3'>
      <div className="total">
      <Link to='./design'>
      <Card >
      <CardImg className="total" width="100%" src="https://miro.medium.com/max/875/1*L5IJM6n8N4wiwqRgoZrWaw.png" alt="Card image cap" />
      <CardImgOverlay>
        <CardTitle className='text-white'>Design</CardTitle>
      </CardImgOverlay>
      </Card>
      </Link>
      </div>
      </div>
    
      
    </div>
    </div>
        );
    }
}
export default Showcase;