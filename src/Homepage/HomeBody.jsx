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
                            Hi! 👋 I'm Jen, a student at the University of Western Ontario pursuing a <b>dual degree in Computer Science and Business Administration</b>. Beyond tech, I enjoy music, fitness, and aviation.
                            <br></br>
                            <br></br>
                            Lorum ipsum dolor sit amet
                    </div>

                    <div className='homebody--feat'>
                        
                    </div>
                </div>
    
            </div>
        </div>
    );
}