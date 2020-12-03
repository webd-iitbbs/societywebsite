import React, { Component } from 'react';

class Timeline extends Component {

  render() { 
    return ( 
      <div className='timeline-date'>
        <h1>{this.props.date}</h1>
      </div>
     );
  }
}
 
class Line extends Component {
  render() { 
    return ( 
        <div  className='timeline-divider' style={{width:'0px'}}>
        </div>
     );
  }
}
 
class Text extends Component {
  render() { 
    return ( 
      <div>
      <div  className='timeline-header'style={{left:'500px', width:'100%' }}>
        <a href="#" style={{color:'black', textDecoration : 'none'}}>{this.props.name}</a>
      </div>
      <div  className='timeline-info' style={{left:'500px' }}>
        <i><b >{this.props.event}</b></i>
        <br/>
        <p2 >{this.props.info}</p2>
        <br/><br/>
      </div>
    </div>
     );
  }
}

 
class Event extends Component {
  render() { 
    return ( 
      <div>
            <div className='timeline-card'>
              <div className='row'>
                  <Timeline date={this.props.date}/>
                  <Line />                
                  <Text name={this.props.name}  event={this.props.event} info={this.props.info}/>
              </div>
            </div>
        <div> 
          <hr className='hr'/>
        </div>
      </div>
     );
  }
}

export default Event;
