import React,{ useEffect, useState,useRef } from "react";
import styled from "styled-components";



const Carousel = () => {
const TOTAL_SLIDES = 2;
const [currentSlide, setCurrentSlide] = useState(0);
const slideRef = useRef(null);

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(0); 
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };
  
  const PrevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(TOTAL_SLIDES); 
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    console.log(slideRef.current.style.transform);
  }, [currentSlide]);

  return (
    <CarouselLayout >
      <CarouselLeftButton onClick={() => PrevSlide()}>{"<"}</CarouselLeftButton>
      <SlideLayout ref={slideRef}>
      <CarouselImage />
      <CarouselImage  style={{ background: "black" }} />
      <CarouselImage  style={{ background: "orange" }} />
      </SlideLayout>
      <CarouselRightButton onClick={() => NextSlide()}>{">"}</CarouselRightButton>
      
    </CarouselLayout>
  );
};


const CarouselLayout = styled.div`
  width: 100vw;
  height: 44vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const SlideLayout = styled.div`
  display: flex;
  overflow: hidden;
`

const CarouselImage = styled.img`
  width: 100vw;
  height: 43vh;
  background-color: green;
  background-size: contain;
  background-repeat: no-repeat;
  flex: none;
  z-index: 1;
`;

const CarouselLeftButton = styled.button`
  width: 30px;
  height: 30px;
  left: 2vw;
  border: 1px solid #dbdbdb;
  border-radius: 15px;
  position: absolute;
  z-index: 5;
  cursor: pointer;
`;
const CarouselRightButton = styled.button`
  width: 30px;
  height: 30px;
  right: 2vw;
  border: 1px solid #dbdbdb;
  border-radius: 15px;
  position: absolute;
  z-index: 5;
  cursor: pointer;
`;

export default Carousel;
