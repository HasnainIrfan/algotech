import React from 'react';
import './Team.css';
// import Pic1 from '../../Assets/Img/hasnain.jpg';
// import Pic2 from '../../Assets/Img/pic.jpg';
// import Pic3 from '../../Assets/Img/pic1.jpg';
// import Pic4 from '../../Assets/Img/pic2.jpg';
// import Pic5 from '../../Assets/Img/pic3.jpg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useContext } from 'react';
import { themeContest } from '../../Contest';


const Team = (props) => {
    const theme = useContext(themeContest);
    const darkMode = theme.state.darkMode;
    const [teamMenu, setTeamMenu] = useState(false);
    const [teamMenu1, setTeamMenu1] = useState(false);
    const [teamMenu2, setTeamMenu2] = useState(false);
    return (
        <>
            <div className={"bg " + (darkMode ? 'bgDark' : '')} >

                <motion.div className="team-wrapper"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.5, type: 'linear', stiffness: 200 }}
                >
                    <div className={"team " + (darkMode ? 'darkteam' : '')}>

                        <h1 style={{ color: props.color }}>Our Team</h1>

                        <div className="teamboxs">
                            <div className={"apple " + (teamMenu ? "TeamBIgOpen" : "TeamBIgClose")}>
                                <div className="apple-title">
                                    <h2 style={{ color: props.color }}>Hasnain</h2>
                                    <h1>Founder and ceo</h1>
                                    <p >3+ Years in the Fornt-End.</p>
                                </div>
                                <div className="appleClose" >
                                    <div className="X" onClick={() => setTeamMenu(false)}></div>
                                </div>
                            </div>

                            <div className={"teambox"}>
                                <div onClick={() => setTeamMenu(true)}>
                                    <div className="teamboxImg"></div>
                                </div>
                                <div className='teamText'>
                                    <p >Hasnain Irfan</p>
                                    <h1 style={{ color: props.color }}>Founder and ceo</h1>
                                </div>
                            </div>

                            <div className={"apple apple1 " + (teamMenu1 ? "TeamBIgOpen" : "TeamBIgClose1")}>
                                <div className="apple-title">
                                    <h2 style={{ color: props.color }}>Shoaib</h2>
                                    <h1>Founder and ceo</h1>
                                    <p>5+ Years in the Development space.</p>
                                </div>
                                <div className="appleClose" >
                                    <div className="X" onClick={() => setTeamMenu1(false)}></div>
                                </div>
                            </div>

                            <div className="teambox">
                                <div onClick={() => setTeamMenu1(true)}>
                                    <div className="teamboxImg1"></div>

                                </div>
                                <div className='teamText'>
                                    <p >Shoaib</p>
                                    <h1 style={{ color: props.color }}>Founder and ceo</h1>
                                </div>
                            </div>

                            <div className={"apple apple2 " + (teamMenu2 ? "TeamBIgOpen" : "TeamBIgClose2")}>
                                <div className="apple-title">
                                    <h2 style={{ color: props.color }}>Nehal</h2>
                                    <h1>Founder and ceo</h1>
                                    <p>5+ Years in the Development space.</p>
                                </div>
                                <div className="appleClose" >
                                    <div className="X" onClick={() => setTeamMenu2(false)}></div>
                                </div>
                            </div>

                            <div className="teambox">
                                <div onClick={() => setTeamMenu2(true)}>
                                    <div className="teamboxImg2"></div>

                                </div>
                                <div className='teamText'>
                                    <p >Nehal</p>
                                    <h1 style={{ color: props.color }}>Founder and ceo</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Team