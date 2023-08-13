"use client"

import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Product from './product.tsx';
import Link from 'next/link'

interface MyObject {
  image: string;
  name: string;
  offer: string;
  tag: string;
}

interface MyComponentProps {
  title: String;
  productList: MyObject[];
}

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
      <ArrowBackIosIcon className='ml-4 z-10'/>
    </div>
  );
};

const NextBtn: React.FC<NextBtnProps> = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon className='z-10'/>
    </div>
  );
};

const DynamicCarousal : React.FC<MyComponentProps> = ({ title,productList })=> {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 1,
    swipe: true,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
  return (
    <section className="bg-white w-full shadow overflow-hidden mb-10">
      <div className="flex px-6 py-3 justify-between items-center">
        <h1 className="text-2xl font-semibold text-black">{title}</h1>
        <Link href="/" className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg">VIEW ALL</Link>
      </div>
      <hr/>
      <Slider {...settings}>
        {productList.map((el, i) => (
          <Product {...el} key={i}/>
        ))}
      </Slider>
    </section>
  )
}

export default DynamicCarousal;
