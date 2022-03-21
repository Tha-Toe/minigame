import React from "react";
import './gamePage.css';
import {motion} from "framer-motion";

const GameCard = ({item,id,handleClick}) => {
    const itemCard = item.stat? " activeCard " + item.stat : "";

    return(
        <motion.div whileHover = {{
            position: "relative",
            scale: [1,1.4,1.2],
            transition: {duration: .2},}} >
                <div className={"card" + itemCard}
                    onClick = {() => handleClick(id)}>
                    <img src={item.img} className= "cardImg"/>
                </div>
        </motion.div>
    )
}

export default GameCard;