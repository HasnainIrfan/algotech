import React, { useState } from 'react';
import './Process.css';
import { UilMonitor } from '@iconscout/react-unicons';
import { UilCamera } from '@iconscout/react-unicons';
import { UilCog } from '@iconscout/react-unicons';
import { UilSlidersVAlt } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';
import { ProcessData } from '../../Data/ProcessData';
import { useContext } from 'react';
import { themeContest } from '../../Contest';


const Process = (props) => {

    const theme = useContext(themeContest);
    const darkMode = theme.state.darkMode;
    const [processData, setProcessData] = useState(ProcessData[0]);

    return (
        <>
            <div className={"bg " + (darkMode ? 'bgDark' : '')} >

                <motion.div className="process-wrapper"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.5, type: 'linear', stiffness: 200 }} //  stiffness : 200
                >
                    <div className={"process " + (darkMode ? 'darkProcess' : '')}>
                        <h1 style={{ color: props.color }}>OUR PROCESS</h1>
                        <div className="process-icon" >
                            <UilMonitor size={40} className={processData.id === 0 ? 'black' : ''} onClick={() => setProcessData(ProcessData[0])} />
                            <UilCamera size={40} className={processData.id === 1 ? 'black' : ''} onClick={() => setProcessData(ProcessData[1])} />
                            <UilCog size={40} className={processData.id === 2 ? 'black' : ''} onClick={() => setProcessData(ProcessData[2])} />
                            <UilSlidersVAlt size={40} className={processData.id === 3 ? 'black' : ''} onClick={() => setProcessData(ProcessData[3])} />
                        </div>

                        <div className="icon-detail">
                            <h1 style={{ color: props.color }}>{processData.title}</h1>
                            <p>{processData.dec}</p>
                        </div>

                    </div>
                </motion.div>

            </div>
        </>
    )
}

export default Process