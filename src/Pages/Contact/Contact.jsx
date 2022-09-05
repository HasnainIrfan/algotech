import React from 'react';
import './Contact.css';
import { UilEstate } from '@iconscout/react-unicons';
import { UilMobileAndroid } from '@iconscout/react-unicons';
import { UilEnvelopeAlt } from '@iconscout/react-unicons';
import { UilMapMarker } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ContactData } from '../../Data/ContactData';
import { useContext } from 'react';
import { themeContest } from '../../Contest';

const Contact = (props) => {

    const theme = useContext(themeContest);
    const darkMode = theme.state.darkMode;

    const [iconIndex, setIconIndex] = useState(ContactData[0]);
    const [mapOpen, setMapOpen] = useState(false);

    return (
        <>
            <div className={"bg " + (darkMode ? 'bgDark' : '')} >
                <motion.div className="contact-wrapper"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.5, type: 'linear', stiffness: 200 }}
                >
                    <div className={"contact " + (darkMode ? 'darkcontack' : '')}>
                        <h1 style={{ color: props.color }}>CONTACTS</h1>
                        <div className="contact-icon">
                            <UilEstate size={40} className={iconIndex.id === 0 ? 'black' : ''} onClick={() => setIconIndex(ContactData[0])} />
                            <UilMobileAndroid size={40} className={iconIndex.id === 1 ? 'black' : ''} onClick={() => setIconIndex(ContactData[1])} />
                            <UilEnvelopeAlt size={40}className={iconIndex.id === 2 ? 'black' : ''} onClick={() => setIconIndex(ContactData[2])} />
                            <UilMapMarker size={40}className={iconIndex.id === 3 ? 'black' : ''} onClick={() => setMapOpen(true)} />
                        </div>

                        <div className={"map " + (mapOpen ? 'mapView' : 'mapHide')}>

                            {mapOpen &&
                                <div>
                                    <iframe title='map' id="gmap_canvas" src="https://maps.google.com/maps?q=pakistan&t=&z=7&ie=UTF8&iwloc=&output=embed"></iframe>
                                </div>
                            }

                            <div className="MapClose" onClick={() => setMapOpen(false)}>
                                <div className="X"></div>
                            </div>

                        </div>

                        <div className="contact-detail" >
                            <h3>
                                {iconIndex.text1}
                            </h3>
                            <h3>
                                {iconIndex.text2}
                            </h3>
                            <h3>
                                {iconIndex.text3}
                            </h3>
                            <h3>
                                {iconIndex.text4}
                            </h3>
                        </div>

                    </div>
                </motion.div>

            </div>
        </>
    )
}

export default Contact