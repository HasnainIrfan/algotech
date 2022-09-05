import React, { useRef, useState } from 'react';
import './Product.css';
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Silder from '../../Assets/Img/protfolio.png';
import Silder1 from '../../Assets/Img/fitclub.png';
// import Silder2 from '../../Assets/Img/Car1.png';
// import Silder3 from '../../Assets/Img/linkshort.png';
// import Silder4 from '../../Assets/Img/litecion.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { themeContest } from '../../Contest';
import Form from '../../Components/Form/Form';


const Product = (props) => {


  const theme = useContext(themeContest);
  const darkMode = theme.state.darkMode;
  const [projectRequest, setProjectRequest] = useState(false);
  const [done, setDone] = useState(false)


  return (
    <div className={"bg " + (darkMode ? 'bgDark' : '')} >
      <motion.div className="product-wrapper"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.5, type: 'linear', stiffness: 200 }}
      >
        <div className={"product " + (darkMode ? 'dark' : '')} >

          <div className={"done " + (done ? 'doneVisible' : '')}>
            <h1> "Thanks For Contacting US" <br></br>Your Request Send ..</h1>
            <h2 onClick={()=>setDone(false)}>X</h2>
          </div>

          <h1 style={{ color: props.color }}>Our Product</h1>

          <Form projectRequest={projectRequest} setProjectRequest={setProjectRequest} done={done} setDone={setDone}/>


          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide className={darkMode ? 'darkproduct' : ''}>
              <div className="slider-img slider-img1"></div>
              <h1 style={{ color: props.color }}>Link Shortner</h1>
              <Link to='/testimonial'><h3>TesTimonial</h3></Link>
              <button className='swiperLinkBtn'><a href="https://fitclubhasnainirfan.pages.dev/"> Check Now</a></button>
              <h5>--- In Progress ---</h5>
            </SwiperSlide>

            <SwiperSlide className={darkMode ? 'darkproduct' : ''}>
              <div className="slider-img"><img src={Silder1} alt="" /></div>
              <h1 style={{ color: props.color }}>Fit Club</h1>
              <h3 >Gym Scheduling Site</h3>
              <button className='swiperlr' onClick={() => setProjectRequest(true)}>Project Request</button>
              <Link to='/testimonial'><button className='swiperlf' >Testimonial Review</button></Link>
              <button className='swiperlb' ><a href="https://fitclubhasnainirfan.pages.dev/" style={{ color: props.color }}> Check Now</a></button>
            </SwiperSlide>

            <SwiperSlide className={darkMode ? 'darkproduct' : ''}>
              <div className="slider-img slider-img3"></div>
              <h1 style={{ color: props.color }}>Free Dollar</h1>
              <Link to='/testimonial'><h3>TesTimonial</h3></Link>
              <button className='swiperLinkBtn'><a href="https://fitclubhasnainirfan.pages.dev/"> Check Now</a></button>
              <h5>--- In Progress ---</h5>
            </SwiperSlide>

            <SwiperSlide className={darkMode ? 'darkproduct' : ''}>
              <div className="slider-img slider-img4"></div>
              <h1 style={{ color: props.color }}>Protfolio</h1>
              <Link to='/testimonial'><h3>TesTimonial</h3></Link>
              <button className='swiperLinkBtn'><a href="https://fitclubhasnainirfan.pages.dev/"> Check Now</a></button>
            </SwiperSlide>

            <SwiperSlide className={darkMode ? 'darkproduct' : ''}>
              <div className="slider-img slider-img5"></div>
              <h1 style={{ color: props.color }}>Car wash</h1>
              <Link to='/testimonial'><h3>TesTimonial</h3></Link>
              <button className='swiperLinkBtn'><a href="https://fitclubhasnainirfan.pages.dev/"> Check Now</a></button>
            </SwiperSlide>

          </Swiper>
        </div>
      </motion.div>
    </div>



    /* <div className="productBoxs">
      <div className="productBox">
        <div className="productImg productImg1">
        </div>
        <div className="productText">
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>T</span>
          <span>F</span>
          <span>O</span>
          <span>L</span>
          <span>I</span>
          <span>O</span>
        </div>
        <button className='productbtn'>Check Now </button>
      </div>

      <div className="productBox">
        <div className="productImg productImg2">
        </div>
        <div className="productText">
          <span>F</span>
          <span>I</span>
          <span>T</span>
          <span>C</span>
          <span>L</span>
          <span>U</span>
          <span>B</span>

        </div>
        <button className='productbtn'>Check Now </button>
      </div>

      <div className="productBox">
        <div className="productImg productImg3 ">
        </div>
        <div className="productText">
          <span>C</span>
          <span>A</span>
          <span>R</span>
          <span>W</span>
          <span>A</span>
          <span>S</span>
          <span>H</span>
        </div>
        <button className='productbtn'>Check Now </button>
      </div>

      <div className="productBox">
        <div className="productImg productImg4">
        </div>
        <div className="productText">
          <span>L</span>
          <span>I</span>
          <span>N</span>
          <span>K</span>
          <span>-</span>
          <span>S</span>
          <span>h</span>
          <span>o</span>
          <span>r</span>
          <span>t</span>
        </div>
        <button className='productbtn'>Check Now </button>
      </div>

      <div className="productBox">
        <div className="productImg productImg5">
        </div>
        <div className="productText">
          <span>F</span>
          <span>R</span>
          <span>E</span>
          <span>E</span>
          <span>D</span>
          <span>O</span>
          <span>L</span>
          <span>L</span>
          <span>A</span>
          <span>R</span>
        </div>
        <button className='productbtn'>Check Now </button>
      </div>

      <div className="productBox">
        <div className="productImg productImg6">
         
        </div>
        <div className="productText">
          <span>P</span>
          <span>R</span>
          <span>O</span>
          <span>T</span>
          <span>F</span>
          <span>O</span>
          <span>L</span>
          <span>I</span>
          <span>O</span>
        </div>
        <button className='productbtn'>Check Now </button>
      </div>

    </div> */
  )
}

export default Product