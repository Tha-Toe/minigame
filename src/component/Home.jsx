import React from "react";
import "./home.css";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay,faLightbulb } from "@fortawesome/free-solid-svg-icons";

function Home () {
    const {ref: homeRef, inVIew: homeInView} = useInView();
    const [useInViewTrue,setUseInView] = useState(false);

    useEffect(() => {
        if(homeInView) {
            setUseInView(true);
        }
    })
       
    return (
        <div className="homeContainer" ref={homeRef}> 
            <div className = {`${"homeHeaderBox"} ${"homeHeaderBoxAnimation"}`}>
                <h1 className="homeHeaderName">PRATICE YOUR MEMORY</h1>
                <img src="/img/homePf.jpg" className="homePf"/>
                <div className="homeHeaderText">
                    <div className="homeHeaderText1">Creator</div>
                    <div className="homeHeaderText1">Tha Toe</div>
                </div>
            </div>
            <Link to="/GamePage">
            <motion.button className="homeButton" whileHover = {{
                position: "relative",
                scale: [1,1.4,1.2],
                transition: {duration: .2},
            }}><FontAwesomeIcon icon={faCirclePlay} className="play"/><span>Play</span></motion.button>
            </Link>
            <div>
                <Link to="/contact">
                    <motion.button whileHover = {{
                        position: "relative",
                        scale: [1,1.4,1.2],
                        transition: {duration: .2},}}
                        className="contactButton"><FontAwesomeIcon icon={faLightbulb} className="play"/><span>Contact Tha Toe</span></motion.button>
                </Link>
            </div>
        </div>
    )
}

export default Home;