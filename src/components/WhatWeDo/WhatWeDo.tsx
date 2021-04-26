import Slider from "react-slick";
import Card from "../Card/Card";

const WhatWeDo = () => {
  const settings = {
    centerMode: true,
    slidesToShow: 3,
    focusOnSelect: true,
    dots: false,
    infinite: true,
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
  };

  return (
    <div className="container">
      <h1>What We Do</h1>
      <p>
        We develop successful apps for our clients who range from startup
        <br />
        entrepreneurs to Fortune 500s.
      </p>
      <Slider {...settings}>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </Slider>
    </div>
  );
};

export default WhatWeDo;
