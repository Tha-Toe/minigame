import React from "react";
import "./home.css";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import {useState,useEffect} from "react";

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
            }}>Play</motion.button>
            </Link>
        </div>
    )
}

export default Home;