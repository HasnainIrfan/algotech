import React, { useState } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { themeContest } from '../../Contest';
// import BackGround from '../../Assets/Img/bg.jpg';


const Navbar = (props) => {
  const theme = useContext(themeContest);
  const darkMode = theme.state.darkMode;

  const [handMenu, setHandMenu] = useState(true);

  return (
    <div className={handMenu ? "navbar" : 'navbarHand' } style={{background : darkMode ? 'black' : ''}} >
      <div className={"navbar-wrapper " + (darkMode ? 'darknavbar' : '') } >
        <div className='navbar-heading' >
          <Link to='/' ><h1 style={{ color: props.color }} >Algotech <span style={{ color: props.color }}>Pro</span></h1></Link>
        </div>

        <div className={handMenu ? "navbar-menu" : "abc"}>
          <ul>
            <li><NavLink to='/' onClick={() => (setHandMenu(true))} >Home</NavLink></li>
            <li><NavLink to='/product' onClick={() => (setHandMenu(true))} >Our Products</NavLink></li>
            <li><NavLink to='/process' onClick={() => (setHandMenu(true))} >Our Process</NavLink></li>
            <li><NavLink to='/team' onClick={() => (setHandMenu(true))} >Team</NavLink></li>
            <li><NavLink to='/contact' onClick={() => (setHandMenu(true))} >Contact Us</NavLink></li>
            <li><NavLink to='/about' onClick={() => (setHandMenu(true))} >ABOUT US</NavLink></li>
            <div className='footerRes'>
              <h1 >Copyright @ Algotech 2022-2090</h1>
            </div>
          </ul>
        </div>

        <div className="navbar-dc"  >
          <h6 style={{ color: props.color }}>Copyright @ Algotech 2022-2090</h6>

          <div className={handMenu ? "toggle" : "toggles"} onClick={() => setHandMenu(!handMenu)}>
            <div className="bar" ></div>
            <div className="bar" ></div>
            <div className="bar" ></div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Navbar