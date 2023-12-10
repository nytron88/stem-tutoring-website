import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/CardSlider.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 

function CardSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='slider-container'>
      <h1>Founding Officers</h1>
      <Slider {...settings}>
        <div className='card'>
          <img src="https://via.placeholder.com/400x200" alt="Placeholder" />
          <h3>Ryan Shrestha</h3>
          <p>President</p>
        </div>
        <div className='card'>
          <img src="https://via.placeholder.com/400x200" alt="Placeholder" />
          <h3>Arjun Pemmasani</h3>
          <p>Vice-President</p>
        </div>
        <div className='card'>
          <img src="https://via.placeholder.com/400x200" alt="Placeholder" />
          <h3>Siddhant Jain</h3>
          <p>Secretary and Web Developer</p>
        </div>
        <div className='card'>
          <img src="https://via.placeholder.com/400x200" alt="Placeholder" />
          <h3>Anand Patil</h3>
          <p>Club Manager</p>
        </div>
        <div className='card'>
          <img src="https://via.placeholder.com/400x200" alt="Placeholder" />
          <h3>Akhilesh Vattumilli</h3>
          <p>Media and Communications</p>
        </div>
      </Slider>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowRight
      className={`${className} custom-arrow`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <FaArrowLeft
      className={`${className} custom-arrow`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

export default CardSlider;
