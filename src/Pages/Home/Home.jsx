import React from 'react';
import './Home.css';
import Logo from '../../Assets/Img/logo.png';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { themeContest } from '../../Contest';
import Bubble from '../../Components/Bubbles/Bubble';

const Home = (props) => {
    
    const theme = useContext(themeContest);
    const darkMode = theme.state.darkMode;
    // const [changeBox , setChangeBox] = useState(false);

    return (
        <>
            <div className={"bg " + (darkMode ? 'bgDark' : '')} >
                <Bubble/>
            {/* style={{ background: darkMode ?  `linear-gradient(rgba(0, 0, 0, 0.5) , rgba(0, 0, 0, 0.5)) ,url(${BackGround})` : '' }} */}
                
                <div className="home">
                    <div className={"level " + (darkMode ? 'dark' : '')} >
                        <h1 style={{color : props.color }}>0</h1>
                        <h6 style={{color: darkMode ? 'white' : ''}}>Next Event</h6>
                        <div className='animateBox'></div>
                    </div>
                    <motion.div className={"home-wrapper " + (darkMode ? 'dark' :'')}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        transition={{ duration: 0.5, type: 'linear', stiffness: 200 }}  //  stiffness : 200
                       
                    >

                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <h1 style={{color : props.color}}>YOUR DIGITAL MILESTONES PARTNER</h1>
                        <p>
                            Algotech is a complete digital solution
                            provider helping companies rethink processes
                            and digitization. Making human solutions,
                            rather than just tech solutions. Covering
                            solution aspects from inception to execution.
                        </p>
                        {
                            <button style={{color : props.color}}>LEARN MORE</button>
                         
                        }
                        
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Home