import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const Carousel = () => {
    const [id,setId] = useState(0);
    const [moveCarousel, setMoveCarousel] = useState(0)

    const plusId = () =>{
        if(moveCarousel===-100){
            setMoveCarousel(0);
        } else{
          setMoveCarousel(moveCarousel-100); 
        }
    }
    const minusId = () =>{
        if(moveCarousel===0){
            setMoveCarousel(-100);
        } else{
          setMoveCarousel(moveCarousel+100); 
        }
    }

    useEffect(()=>{
        setTimeout(()=>moveCarousel===-100?setMoveCarousel(0):setMoveCarousel(moveCarousel-100),3000)
    },[moveCarousel])

 console.log(moveCarousel);
  return (
    <CarouselLayout>
        <CarouselLeftButton onClick={()=>minusId()}>{'<'}</CarouselLeftButton>
        <CarouselImage margin={moveCarousel}/>
        <CarouselImage margin={moveCarousel} style={{background:'black'}}/>
        <CarouselRightButton onClick={()=>plusId()}>{'>'}</CarouselRightButton>
    </CarouselLayout>
  );
};

const moveImage = keyframes`
from{
    margin-left: 0%;
}to{
    margin-left: -50%;
}
`;
const CarouselLayout = styled.div`
  width: 100vw;
  height: 44vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`

const CarouselImage = styled.img`
width: 100vw;
  height: 43vh;
  margin-left: ${props=>props.margin}%;
  background-color: green;
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  flex: none;
  transition: all 1.5s ease-out;
  z-index: 1;
  /* animation: ${moveImage} 5s 2s infinite linear ; */
`

const CarouselLeftButton = styled.button`
    width: 30px;
    height: 30px;
    left: 2vw;
    border: 1px solid #dbdbdb;
    border-radius: 15px;
    position: absolute;
  z-index: 5;
  cursor: pointer;
`
const CarouselRightButton = styled.button`
    width: 30px;
    height: 30px;
    right: 2vw;
    border: 1px solid #dbdbdb;
    border-radius: 15px;
    position: absolute;
  z-index: 5;
  cursor: pointer;
`

export default Carousel;
