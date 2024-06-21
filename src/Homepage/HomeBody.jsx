import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function HomeBody() {
    const location = useLocation();

    return (
        <div className='homebody--container' id='about-me'>
            <div className='homebody--main'>
                <div className='homebody--title'>
                    ABOUT ME
                </div>

                <div className='homebody--content'>
                    <div className='homebody--text'>
                            Hi! 👋 I'm Jen, a student at the University of Western Ontario pursuing a <b>dual degree in Computer Science and Business Administration</b>. 
                            <br></br>
                            <br></br>
                            I am interested in frontend/full-stack internship opportunities as well as freelance developer/designer gigs.
                            <br></br>
                            <br></br>
                            Beyond tech, I enjoy photography, music, fitness, and aviation.
                    </div>
                </div>
    
            </div>
        </div>
    );
}