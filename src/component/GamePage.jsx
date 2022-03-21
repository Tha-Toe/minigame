import React from "react";
import {useState,useEffect} from "react";
import "../component/gamePage.css";
import GameCard from "./GameCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {useInView} from "react-intersection-observer";
import {motion} from "framer-motion";

function GamePage () {
    const [cards,setCards] = useState([
        {id:1, img: '/image/angular.png', stat: ""},
        {id:1, img: '/image/angular.png', stat: ""},
        {id:2, img: '/image/css.png', stat: ""},
        {id:2, img: '/image/css.png', stat: ""},
        {id:3, img: '/image/html.png', stat: ""},
        {id:3, img: '/image/html.png', stat: ""},
        {id:4, img: '/image/js.png', stat: ""},
        {id:4, img: '/image/js.png', stat: ""},
        {id:5, img: '/image/nodejs.png', stat: ""},
        {id:5, img: '/image/nodejs.png', stat: ""},
        {id:6, img: '/image/react.png', stat: ""},
        {id:6, img: '/image/react.png', stat: ""},
        {id:7, img: '/image/scss.png', stat: ""},
        {id:7, img: '/image/scss.png', stat: ""},
        {id:8, img: '/image/vue.png', stat: ""},
        {id:8, img: '/image/vue.png', stat: ""},
    ].sort(() => Math.random() -0.5));

    const [prev,setPrev] = useState(-1);
    const [cardDelay,setCardDelay] = useState(false);


    const check = (current) => {
        if(cards[current].id === cards[prev].id) {
            cards[current].stat = "successCard";
            cards[prev].stat = "successCard";
            setCards([...cards]);
            setWin(win+1);
            setPrev(-1);
            setCardDelay(true);
            setTimeout(() => {
                setCardDelay(false);
            },1300)
        }else {
            cards[current].stat = "wrongCard";
            cards[prev].stat = "wrongCard";
            setCards([...cards]);
            setTimeout(() => {
                cards[current].stat = "";
                cards[prev].stat = "";
                setCards([...cards]);
                setPrev(-1);
            },1000)
            setCardDelay(true);
            setTimeout(() => {
                setCardDelay(false);
            },1300)
        }
    }

    const handleClick = (id) => {
        if(!cardDelay) {
            if (startValue<1) {
                if(prev === -1) {
                    cards[id].stat = "activeCard";
                    setCards([...cards]);
                    setPrev(id);
                }else if (cards[id].stat){
                    return;
                }else {
                    check(id);
                }
            }
        }
    }

    const[win,setWin] = useState(0);
    const [lose,setLose] = useState(false);



    const [startValue,setStartValue] = useState(5);
    const [visible,setVisible] = useState(false);
    const [timer,setTimer] = useState(30);
    const [fullTime,setFullTime] = useState(false);
    const [interv,setInterv] = useState();

    const {ref: gamePageRef,inView: gamePageVisible} = useInView();


   
    useEffect(() => {
    if(gamePageVisible) {
        if(win===8) {
            setVisible(false);
        } else {
            if(lose) {
                setVisible(false);
            }else {
                setVisible(true);
        }
    }
    }
    },[gamePageVisible,win])



    useEffect(() => {
        if(visible) {
            const interval = setInterval(runTime,1000);
            return() => clearInterval(interval);
        }
    })

    const runTime = () => {
        if(startValue < 1) {
            if(timer === 0) {
                setFullTime(true);
                setLose(true);
                return;
            }else {
                setTimer(timer-1);
            }
        }else{
        setStartValue(startValue-1);
        }
    }

    return (
        <div className="gamePageContainer">
            <div className="timer">
                <div className={`${timer<5? "warning":""}`}>{startValue<1 ? `seconds left - ${timer}`:`Ready - ${startValue}`}</div>
            </div>
            <div className="cards" ref={gamePageRef}>
            {cards.map((item,index) => (
                <GameCard item = {item} id = {index} handleClick = {handleClick}/>
            ))}
            </div>
            <div>
                <Link to = "/">
                <motion.button 
                    whileHover = {{
                    position: "relative",
                    scale: [1,1.4,1.2],
                    transition: {duration: .2},}} 
                    className="exitButton">Exit
                    <FontAwesomeIcon icon={faArrowRightFromBracket} className="faExit"/>
                </motion.button>
                </Link>
            </div>
            {lose? <div className="losePage">
                <h1>You Lose</h1>
                <h3>Goodluck next time</h3>
                <div>
                    <Link to = "/">
                        <motion.button whileHover = {{
                            position: "relative",
                            scale: [1,1.4,1.2],
                            transition: {duration: .2},}} 
                            className="exitButtonFinish">Exit
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="faExit"/>
                        </motion.button>
                    </Link>
                </div>
            </div>: ""}
            {win===8 ? <div className="winPage">
                <h1>You Win</h1>
                <h3>Congratulations from Tha Toe</h3>
                <div>
                    <Link to = "/">
                        <motion.button whileHover = {{
                            position: "relative",
                            scale: [1,1.4,1.2],
                            transition: {duration: .2},}} 
                            className="exitButtonFinish">Exit
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="faExit"/>
                        </motion.button>
                    </Link>
                </div>
            </div>: ""}
        </div>
    )
}

export default GamePage;