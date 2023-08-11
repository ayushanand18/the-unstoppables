"use client"

import React from 'react';
import Slider from 'react-slick';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import laptop from '../public/assets/images/Banners/laptop.webp'
import ticketDeals from '../public/assets/images/Banners/ticketDeals.webp'
import zebronics from '../public/assets/images/Banners/zebronics.webp'
import vivo from '../public/assets/images/Banners/vivo.webp'
import oppoReno7 from '../public/assets/images/Banners/oppo-reno7.webp'
import Image from 'next/image';

interface PreviousBtnProps {
  className?: string;
  onClick?: () => void;
}

interface NextBtnProps {
  className?: string;
  onClick?: () => void;
}

const PreviousBtn: React.FC<PreviousBtnProps> = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  );
};

const NextBtn: React.FC<NextBtnProps> = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  );
};

const Carousal: React.FC = () => {

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };

  const banners = [laptop,vivo,ticketDeals,oppoReno7,zebronics];

  return (
    <section className="h-72 sm:h-72 w-full rounded-sm shadow relative overflow-hidden mt-20">
      <Slider {...settings}>
        {banners.map((el, i) => (
          <Image
            draggable="false"
            className="h-72 sm:h-72 w-full object-cover"
            src={el}
            alt="banner"
            key={i}
          />
        ))}
      </Slider>
    </section>
  );
};

export default Carousal;
