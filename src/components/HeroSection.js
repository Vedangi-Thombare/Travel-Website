import React from "react";
import '../App.css'
import '../static/HeroSection.css';
import {Button} from "./Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className= "hero-btns">
                <Button className = 'btns' buttonStyle='btn--outline' buttonSize= 'btn--large'>
                    GET STARTED
                </Button>
                  <Button className = 'btns' buttonStyle='btn--primary' buttonSize= 'btn--large'>
                    WATCH TRAILER <FontAwesomeIcon icon="fa-regular fa-circle-play" />
                </Button>
            </div>
        </div>
    )
}

export default HeroSection;
