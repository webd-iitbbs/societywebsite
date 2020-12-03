import React, { Component } from 'react';
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class Pro extends Component{
    constructor(props){
        super(props);
        this.state={

        };
    };
    render(){
        return(
            <div className="row px-5">
              <div className='col-3 p-3'>
                <Card>
                  <img width="100%" src='http://rohith-portfolio.herokuapp.com/images/project3.jpg'  />
                  <CardBody>
                  <CardTitle tag="h5"><a href='#'>Gymkhana, IIT BBS</a></CardTitle>
                    <CardText></CardText>
                    <div className='row'>
                    <Button outline color="primary"className='col-5' style={{marginTop:'6px'}}>Bootstrap</Button>&nbsp;&nbsp;
                    <Button outline color="primary" className='col-5' style={{marginTop:'6px'}}>Javascript</Button>&nbsp;&nbsp;
                    <Button outline color="primary" className='col-3' style={{marginTop:'6px'}}>PHP</Button>&nbsp;&nbsp;
                    <Button outline color="primary" className='col-5' style={{marginTop:'6px'}}>MySQL</Button>
                   
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className='col-3 p-3'>
                <Card>
                  <img width="100%" src='http://rohith-portfolio.herokuapp.com/images/project2.jpg'  />
                  <CardBody>
                  <CardTitle tag="h5"><a href='#'>CDC-IITBBS</a> </CardTitle>
                    <CardText>Some thing about website</CardText>
                    <div className='row'>
                    <Button outline color="primary" className='col-6' style={{marginTop:'6px'}}>PHP-Laravel</Button>&nbsp;&nbsp;
                    <Button outline color="primary" className='col-5' style={{marginTop:'6px'}}>Javascript</Button>&nbsp;&nbsp;
                    <Button outline color="primary" className='col-5' style={{marginTop:'6px'}}>MySQL</Button>&nbsp;&nbsp;
                    <Button outline color="primary" className='col-5' style={{marginTop:'6px'}}>Bootstrap</Button>
                    
                   
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className='col-3 p-3'>
                <Card>
                  <img width="100%" src='http://rohith-portfolio.herokuapp.com/images/project3.jpg' />
                  <CardBody>
                  <CardTitle tag="h5"><a href='#'>Academic council</a></CardTitle>
                    <CardText>Some thing about website</CardText>
                    <div className='row'>
                    <Button outline color="primary" className='col-5' style={{marginTop:'6px'}}>React js</Button>&nbsp;&nbsp;
                    <Button outline color="primary" className='col-5' style={{marginTop:'6px'}}>Firebase</Button>&nbsp;&nbsp;
                    <Button outline color="primary" className='col-4' style={{marginTop:'6px'}}>Wiki.js</Button>
                   
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className='col-3 p-3'>
                <Card>
                  <img width="100%" src='http://rohith-portfolio.herokuapp.com/images/project3.jpg' />
                  <CardBody>
                  <CardTitle tag="h5"><a href='#'>Intense Prediction League (in collaboration with Ashvamedha)</a></CardTitle>
                    <CardText>Some thing about website</CardText>
                    <div className='row'>
                    <Button outline color="primary" className='col-5' style={{marginTop:'6px'}}>Javascript</Button>&nbsp;&nbsp;
                    <Button outline color="primary" className='col-5' style={{marginTop:'6px'}}>Bootstrap</Button>&nbsp;&nbsp;
                    <Button outline color="primary" className='col-5' style={{marginTop:'6px'}}>Firebase</Button>
                   
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
        );
    }
}





class Web extends Component{
    constructor(props){
        super(props);
        this.state={
            datas : [
               {
                 id: 0,
                 title: 'Local OLX',
                 image: 'http://rohith-portfolio.herokuapp.com/images/project3.jpg',
                 
                 text: 'Idea of the project',
               },
               {
                 id: 1,
                 title: 'Intra Quora',
                 image: 'http://rohith-portfolio.herokuapp.com/images/project3.jpg',
                
                 text: 'Idea of the project',
               },
               {
                 id: 2,
                 title: 'Live Quiz Multiplayer',
                 image: 'http://rohith-portfolio.herokuapp.com/images/project3.jpg',
                 
                 text: 'Idea of the project',
               },
               {
                 id: 3,
                 title: 'Travel Companion',
                 image: 'http://rohith-portfolio.herokuapp.com/images/project3.jpg', 
                 
                 text: 'Idea of the project',
               },
               {
                 id: 4,
                 title: 'Website for Web and Design Society',
                 image: 'http://rohith-portfolio.herokuapp.com/images/project3.jpg',
                 
                 text: 'Idea of the project',
               },
              ]
        };
    };

    render(){
        const list = this.state.datas.map((data) => {
            return(
                <div className=' col col-md-12 col-sm-12 col-lg-3 p-3' key={data.id}>
                <Card>
                  <img width="100%" src={data.image} alt="For example" />
                  <CardBody>
                  <CardTitle tag="h5"><a href='#'>{data.title}</a></CardTitle>
                    <CardText>{data.text}</CardText>
                    <div className='row'>
                    <Button outline color="primary" className='col-5' style={{marginTop:'6px'}}>React js</Button>&nbsp;&nbsp;
                    <Button outline color="primary" className='col-4' style={{marginTop:'6px'}}>Node js</Button>&nbsp;&nbsp;
                    <Button outline color="primary" className='col-5' style={{marginTop:'6px'}}>Express js</Button>&nbsp;&nbsp;
                    <Button outline color="primary" className='col-5' style={{marginTop:'6px'}}>MongoDB</Button>
                   
                    </div>
                  </CardBody>
                </Card>
              </div>
            );
          });
        return(
            <React.Fragment>
                <h1 className="justify-content-center offset-5 pt-5">Ongoing Projects</h1>
                <div className="row px-5">
                {list}
                </div>
                <h1 className="justify-content-center offset-5 pt-5">Completed Projects</h1>
                <Pro />
            </React.Fragment>
        );
    }
}
export default Web;