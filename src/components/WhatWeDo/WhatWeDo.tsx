import Slider from "react-slick";
import Card from "../Card/Card";
import image from '../../assets/image5.png'


import React, { useEffect, useState } from "react";
const WhatWeDo = () => {
  const [updateCount, setUpdateCount] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    centerMode: true,
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    infinite: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],

    afterChange: (current: any) => setSlideIndex(current),
  };
  useEffect(() => {
    console.log(slideIndex, "from here");
  }, [slideIndex]);

  const arry = [
    {
      id:0,
      title: "Cutting edge",
      image:image,
      description:
        "We develop successful apps for our clients who range from startu We develop successful apps for ",
    },
    {
      id:1,
      title: "Web app",
      image:image,
      description:
        "We develop successful apps for our clients who range from startu We develop successful apps for p",
    },
    {
      id:2,
      title: "Mobile apps",
      image:image,
      description:
        "We develop successful apps for our clients who range from startu We develop successful apps for ",
    },
    {
      id:3,
      title: "IoT devices",
      image:image,
      description:
        "We develop successful apps for our clients who range from startu We develop successful apps for  ",
    },
  ];

  return (
    <div className="container-custom">
      <h1>What We Do</h1>
      <p>
        We develop successful apps for our clients for startup
        <br />
        entrepreneurs to Fortune 500s.
      </p>
      <Slider {...settings}>
        {arry.map((item, i) => {
          return (
            <div key={i}>
              <Card data={item} showButton={i === slideIndex} />
            </div>
          );
        })}
      </Slider>
      <div className='showMoreBtn' >
      <button className="read-more shadow-lg mt-4">View all projects<i className="fas fa-angle-right ml-4"></i></button>
      </div>

    </div>
  );
};

export default WhatWeDo;
