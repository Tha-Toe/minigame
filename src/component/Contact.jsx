import React, { useEffect,useState } from "react";
import './contact.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser,faSquarePhone,faMapLocationDot,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faGithub,faFacebook} from "@fortawesome/free-brands-svg-icons";
import {useInView} from "react-intersection-observer";
import {motion, useAnimation} from "framer-motion"



const Contact = () => {
    const {ref: contactRef, inView: contactVisible} = useInView();
    const {ref: contactMeRef, inView: contactMeVisible} = useInView();
    const {ref: skillRef, inView: skillVisible} = useInView();

    const contactMeAnimation = useAnimation();
    const skillAnimation = useAnimation();

    const [contactMeInView,setContactMeInView] = useState(false);

    useEffect(() => {
        if(contactVisible) {
            setContactMeInView(true);
        }
    },[contactVisible])

    useEffect(() => {
        if(contactMeVisible) {
            contactMeAnimation.start(() => ({
                left: 0,
                opacity: 1,
                transition: {
                    type: "all",
                    duration: 1.5,                    
                }
            }))
        }
    },[contactMeVisible,contactMeAnimation])

    useEffect(() => {
        if(skillVisible) {
            skillAnimation.start(() => ({
                left: 0,
                opacity: 1,
                transition: {
                    type: "all",
                    duration: 1.5,                    
                }
            }))
        }
    },[skillVisible,skillAnimation])

    return (
        <div className="contactMainContainer">
            <div className="contactHeader">
                <div  ref={contactRef} className = {`${"contact"} ${contactMeInView? "contactAnimation": ""}`}>Contact</div>
                <div className="me"><span>Me</span></div>
            </div>
            <div className="contactContainer">
                <div className="contactLeft">
                    <motion.div className = {`${"contactCard"}`} 
                        animate = {contactMeAnimation}
                        initial = {{left: -100, opacity: 0,}}
                        ref={contactMeRef} 
                        whileHover = {{
                                position: "relative",
                                zIndex: 1,
                                scale: [1,1.3,1.2],
                                transation: {duration: .1}
                        }} >              
                        <div className="addressContainer">
                            <FontAwesomeIcon icon = {faUser} className="addressIcon" />
                            <div className="addressNote">Tha Toe Saung</div>
                        </div>
                        <div className="addressContainer">
                        <FontAwesomeIcon icon = {faSquarePhone} className="addressIcon" />
                            <div className="addressNote">09773159335</div>
                        </div>
                        <div className="addressContainer">
                        <FontAwesomeIcon icon = {faMapLocationDot} className="addressIcon" />
                            <div className="addressNote">Taungoo, Myanmar</div>
                        </div>
                        <div className="addressContainer">
                        <FontAwesomeIcon icon = {faEnvelope} className="addressIcon" />
                            <div className="addressNote">thatoesaung510dev@gmail.com</div>
                        </div>
                        <div className="addressContainer">
                        <FontAwesomeIcon icon = {faGithub} className="addressIcon" />
                            <a className="addressNote addressLink" href="https://github.com/Tha-Toe">Tha-Toe</a>
                        </div>
                        <div className="addressContainer">
                        <FontAwesomeIcon icon = {faFacebook} className="addressIcon" />
                            <a href="https://www.facebook.com/tha.toe.906" className="addressNote addressLink">Tha Toe</a>
                        </div>
                    </motion.div>
                </div>
                <div className="contactRight">
                    <motion.div className = {`${"skillCard"}`} 
                    ref={skillRef}
                    animate = {skillAnimation}
                    initial = {{right: -100, opacity: 0,}}
                    whileHover = {{
                        position: "relative",
                        zIndex: 1,
                        scale: [1,1.2,1.1],
                        transation: {duration: .1}
                    }}>
                        <div className="skillHeader">Skill</div>
                        <div className="skillProgressContainer">
                            <div className="skillContainer">
                                <div className="skillText">
                                    <div className="skillName">HTML</div>
                                    <div className="skill%">90%</div>
                                </div>
                                <div className="progressBar">
                                    <div className = {`${"childProgressBar"} ${"html"} ${skillVisible? "htmlAnimation": ""}`}></div>
                                </div>
                            </div>
                        </div>
                        <div className="skillProgressContainer">
                            <div className="skillContainer">
                                <div className="skillText">
                                    <div className="skillName">CSS</div>
                                    <div className="skill%">75%</div>
                                </div>
                                <div className="progressBar">
                                    <div className = {`${"childProgressBar"} ${"css"} ${skillVisible? "htmlAnimation": ""}`}></div>
                                </div>
                            </div>
                        </div>
                        <div className="skillProgressContainer">
                            <div className="skillContainer">
                                <div className="skillText">
                                    <div className="skillName">BOOTSTRAP</div>
                                    <div className="skill%">80%</div>
                                </div>
                                <div className="progressBar">
                                    <div className = {`${"childProgressBar"} ${"bootstrap"} ${skillVisible? "htmlAnimation": ""}`}></div>
                                </div>
                            </div>
                        </div>
                        <div className="skillProgressContainer">
                            <div className="skillContainer">
                                <div className="skillText">
                                    <div className="skillName">JAVASCRIPT</div>
                                    <div className="skill%">80%</div>
                                </div>
                                <div className="progressBar">
                                    <div className = {`${"childProgressBar"} ${"javascript"} ${skillVisible? "htmlAnimation": ""}`}></div>
                                </div>
                            </div>
                        </div>
                        <div className="skillProgressContainer">
                            <div className="skillContainer">
                                <div className="skillText">
                                    <div className="skillName">REACT JS</div>
                                    <div className="skill%">70%</div>
                                </div>
                                <div className="progressBar">
                                <div className = {`${"childProgressBar"} ${"react"} ${skillVisible? "htmlAnimation": ""}`}></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Contact;