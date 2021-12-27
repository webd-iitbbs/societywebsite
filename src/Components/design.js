import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import styles from './design.css';
import Slider from "react-slick";



function MultipleItems() {

  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 3,
  		slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  };

  const slidesData = [
    {
      id: 1,
      title: '1st Poster',
      label: 'This is first Poster.',
      src: 'https://learnengineering.org/Thermal-power-plant/Steam-turbine-rotor-blade.jpg'
    }, {
      id: 2,
      title: '2nd Poster',
      label: 'This is second Poster.',
      src: 'https://learnengineering.org/Thermal-power-plant/thermal-power-plant.jpg'
    }, {
      id: 3,
      title: '3rd poster',
      label: 'This is third Poster.',
      src: 'https://learnengineering.org/Thermal-power-plant/Stages-of-steam-turbine.jpg'
    }, {
      id: 4,
      title: '4th Poster',
      label: 'This is fourth Poster.',
      src: 'https://learnengineering.org/Thermal-power-plant/cooling-tower.jpg'
    }, {
      id: 5,
      title: '5th Poster',
      label: 'This is fifth Poster.',
      src: 'https://learnengineering.org/Thermal-power-plant/Electrode-plate.jpg'
    }, {
      id: 6,
      title: '6th Poster',
      label: 'This is sixth Poster.',
      src: 'https://learnengineering.org/Thermal-power-plant/Electrostatic-precipator.jpg'
    },
  ];

  return (
    <div className="App">

      <div className="slider-wrapper p-5">

        <Slider {...settings}>

          {slidesData.map((slide) =>

            <div className="slick-slide" key={slide.id}>
              <h2 className="slick-slide-title">{slide.title}</h2>
              <img className="slick-slide-image" src={slide.src} />
              <label className="slick-slide-label">{slide.label}</label>
            </div>

          )}

        </Slider>

      </div>

    </div>
  );
}



class Design extends Component{
    constructor(props){
        super(props);
        this.state = {
             datas : [
               {
                 id: 0,
                 title: 'Rashtriya Ekta Diwas',
                 image: 'assets/img/0.png',
                 subtitle: 'Bhargav',
               },
               {
                id: 1,
                title: 'IITBBS on Discord',
                image: 'assets/img/1.jpg',
                subtitle: 'Rohith',
              },
              {
                id: 2,
                title: 'Online Workshop',
                image: 'assets/img/2.jpg',
                subtitle: 'Anirudh',
              },
              {
                id: 3,
                title: 'Independence Day',
                image: 'assets/img/3.jpg',
                subtitle: 'Anirudh',
              },
              {
                id: 4,
                title: 'Fathers Day',
                image: 'assets/img/4.png',
                subtitle: 'Ratna',
              },
              {
                id: 5,
                title: 'CreatiWFacts',
                image: 'assets/img/5.jpg',
                subtitle: 'Rohith',
              },
              {
                id: 6,
                title: 'Digital Arts Competition',
                image: 'assets/img/6.jpg',
                subtitle: 'Prabhas',
              },
              {
                id: 7,
                title: 'Environment Day',
                image: 'assets/img/7.jpg',
                subtitle: 'Charan',
              },
              {
                id: 8,
                title: 'Galactic Talk Competition',
                image: 'assets/img/8.jpg',
                subtitle: 'Prabhas',
              },
              {
                id: 9,
                title: 'Ganesh Chaturthi',
                image: 'assets/img/9.jpg',
                subtitle: 'SonuTez',
              },
              {
                id: 10,
                title: 'Elocution Competition',
                image: 'assets/img/10.jpg',
                subtitle: 'Krishna',
              },
              {
                id: 11,
                title: 'Mothers Day',
                image: 'assets/img/11.jpg',
                subtitle: 'Kiran',
              },
              {
                id: 12,
                title: 'Rashtriya Ekta Diwas',
                image: 'assets/img/12.png',
                subtitle: 'Bhargav',
              },
              {
                id: 13,
                title: 'Rakshabandan',
                image: 'assets/img/13.png',
                subtitle: 'Ratna',
              },
              {
                id: 14,
                title: 'ROS Workshop',
                image: 'assets/img/14.jpg',
                subtitle: 'Krishna',
              },
              {
                id: 15,
                title: 'Campus Protocols',
                image: 'assets/img/15.jpg',
                subtitle: 'Krishna',
              },
               {
                id: 16,
                title: 'Counselling Services',
                image: 'assets/img/16.jpg',
                subtitle: 'Krishna',
              },
               {
                id: 17,
                title: 'Creatifatcs',
                image: 'assets/img/17.png',
                subtitle: 'Krishna',
              },
             ]
        }
    }
    render(){
      const list = this.state.datas.map((data) => {
        return(
          <div key={data.id} className= "col-12 col-lg-4 col-md-6 p-5">
            <div className="eff">
            <Card>
              <CardImg top width="100%" src={data.image} alt="Card image cap" height="250px" />
              <CardBody>
                <CardText>{data.title}</CardText>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Poster Credits : {data.subtitle}</CardSubtitle>
              </CardBody>
            </Card>
          </div>
          </div>
        );
      });
        return(
          <React.Fragment>
            <h1 className="justify-content-center offset-5 pt-2">Posters</h1>
          <div className="row">
          {list}
          </div>
          {/* <h1 className="justify-content-center offset-5 pt-2">Collection of Posters</h1>
          <MultipleItems /> */}
          </React.Fragment>
      
        );
    };
}
export default Design;
