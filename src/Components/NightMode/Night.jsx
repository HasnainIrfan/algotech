import React from 'react';
import './Night.css';
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import { useContext } from 'react';
import { themeContest } from '../../Contest';


const Night = (props) => {

  const theme = useContext(themeContest);
  const darkMode = theme.state.darkMode;

  const handleClick = ()=>{
    theme.dispatch({type:'toggle'})
  }
  return (
    <div className="NightMode" onClick={handleClick} >
        <Sun/>
        <Moon/>
        <div className="N-btn "   style={ darkMode ? {left:'2px'} : {right:'2px'}}></div>
    </div>
    
  )
}

export default Night