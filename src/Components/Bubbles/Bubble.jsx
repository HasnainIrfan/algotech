import React from 'react';
import './Bubble.css';
import bubble from '../../Assets/Img/bub3.png';
 
const Bubble = () => {
  return (
    <>
    <div className="bubble">
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
    </div>
    </>
  )
}

export default Bubble