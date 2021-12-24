import React from "react";
import Slider from "react-slick";
import Description from "../description/Description";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const SimpleSwatch = ({ pantoneData, currentPantone }) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    accessibility: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: false,
    fade: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {pantoneData.map(function (slide, i) {
          return (
            <div key={i}>
              <section className="swatch">
                <section
                  className="color"
                  style={{
                    background: `linear-gradient(-45deg, ${slide.hex} 37%, ${
                      slide.hex2 || slide.hex
                    } 56%)`,
                  }}
                ></section>
                <section className="description">
                <small>{slide.year}</small>
                <h2>
                  PANTONE<sup className="swatch-superscript">&reg;</sup>
                </h2>
                <Description slide={slide} />
              </section>
              </section>
              
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SimpleSwatch;
