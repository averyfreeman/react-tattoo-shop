import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { Image } from "@chakra-ui/react";
import ImageExpanderModal from "../components/ImageExpanderModal";
import imagelist from "../assets/imagelist";

// https://react-slick.neostack.com/docs/api
const SimpleSlider = () => {
  const settings = {
    arrows: false,
    autoplay: true,
    // centerMode: true,
    dots: false,
    infinite: true,
    initialSlide: 0,
    lazyLoad: true,
    slidesToShow: 2,
    speed: 500,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          dots: false,
          slidesToShow: 6,
          slidesToScroll: 6,
          initialslide: 6,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 4,
          slidesToScroll: 4,
          initialslide: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {imagelist.map((src, i) => (
        <ImageExpanderModal key={`ImageExpanderModal-${i}`}>
          <Image
            alignSelf="flex-end"
            alt={`image filename ${src}`}
            borderRadius="1em"
            h={["12em", "24em"]}
            key={`SimpleSlider-Image-${i}`}
            // m={2}
            objectFit="cover"
            // objectFit="contain"
            opacity={1}
            // px="0.4em"
            // py={0}
            src={src}
            fallbackSrc="/gremlins-small.png"
            // w={["12em", "16em"]}
            // alignSelf="flex-end"
            // alt="nna pledge banner"
            // borderRadius="lg"
            // objectFit="contain"
            // m={2}
            // src="/notary-pledge-frompdf.webp"
            // fallbackSrc="/nna-pledge.png"
          />
        </ImageExpanderModal>
      ))}
    </Slider>
  );
};

export default SimpleSlider;
