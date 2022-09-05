import React, { useState } from 'react';
import './ColorChange.css'
import { UilSetting } from '@iconscout/react-unicons'
import { UilPaintTool } from '@iconscout/react-unicons'
import Night from '../NightMode/Night';
import { SketchPicker } from 'react-color';
import { useContext } from 'react';
import { themeContest } from '../../Contest';

const ColorChange = (props) => {

    const theme = useContext(themeContest);
    const darkMode = theme.state.darkMode;

    const [isOpen, setIsOpen] = useState(false);
    const [showColorP, setShowColorP] = useState(false);

    return (

        <div
            className={"colorChanger " + (isOpen ? "colorMainOpen" : "colorMainClose")}
            style={{ color: props.color }}
        >

            <div className="color-r">
                <div className="color-rt">
                    <h6>Night Mode</h6><Night color={props.color} />
                </div>
                <div className="color-rb">
                    <div>
                        <button onClick={() => setShowColorP(!showColorP)}>Open Color Picker <UilPaintTool size={12} /></button>
                    </div>


                    <div className={'pickerStyle ' + (showColorP ? 'pickerStyleOpen' : 'pickerStyleClose')} >
                        <div className={"pickerClose " + (darkMode ? 'darkcolor' : '')} >
                            <div className="X" onClick={() => setShowColorP(false)}></div>
                        </div>
                        <SketchPicker color={props.color} onChange={updateColor => props.setColor(updateColor.hex)}/>

                    </div>


                </div>
            </div>
            <div className="color-l">
                <div className="color-btn" onClick={() => setIsOpen(!isOpen)}>
                    <UilSetting size={40} style={{ color: props.color }} />
                </div>
            </div>
        </div>


    )
}

export default ColorChange
