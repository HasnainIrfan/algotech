import React from 'react';
import './About.css';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { themeContest } from '../../Contest';

const About = (props) => {
    const theme = useContext(themeContest);
    const darkMode = theme.state.darkMode;
    return (
        <>
            <div className={"bg " + (darkMode ? 'bgDark' : '')} >
                <motion.div className="about-wrapper"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.5, type: 'linear', stiffness: 200 }}
                >
                    <div className={"about " + (darkMode ? 'darkabout' : '')} >

                        <h1 style={{ color: props.color }}>ABOUT US</h1>
                        <p>
                            We are a team of talented people with big
                            ideas and creative minds. We are here to
                            meet your business needs in more effective
                            and profitable ways. Miletap is a perfect
                            partner to keep your business interests met
                            as we make the solutions others just talk about.
                            We are here for you.
                        </p>
                        <div className='animateBorder'></div>
                        <p>
                            “Their solutions are real and have a variety of
                            applications that actually bring efficiencies to
                            businesses. ”
                        </p>
                        <h6 style={{ color: props.color }}>TIM RAY, FUTURES</h6>

                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default About