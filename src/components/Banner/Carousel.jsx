import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Carousel = () => {
    const [id,setId] = useState(0);
    const [moveMargin, setMoveMargin] = useState(0)

    const plusId = () =>{
        if(id===2){setId(0)}
        else{
          setId(id+1);  
        }
        setMoveMargin(moveMargin-100);
        
    }
    const minusId = () =>{
        if(id===0) setId(2);
        setId(id-1);
    }
    console.log(id);
 console.log(moveMargin);
  return (
    <CarouselLayout>
        <CarouselLeftButton onClick={()=>minusId()}>-</CarouselLeftButton>
        <CarouselImage/>
        <CarouselImage style={{background:'black'}}/>
       <CarouselImage style={{background:'pink'}}/>
        <CarouselRightButton onClick={()=>plusId()}>+</CarouselRightButton>
    </CarouselLayout>
  );
};

const moveImage = keyframes`
from{
    margin-left: 0%;
  }
  to{
    margin-left: -300%;
  }
`;
const CarouselLayout = styled.div`
  width: 100vw;
  height: 44vh;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`

const CarouselImage = styled.img`
width: 100vw;
  height: 43vh;
  margin: moveMargin;
  background-color: green;
  background-position: 50% 50%;
  background-size: contain;
  background-repeat: no-repeat;
  flex: none;
  z-index: 1;
  animation: ${moveImage} 5s 5s  linear ;
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
