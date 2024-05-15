import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function HomeFooter() {
    const location = useLocation();

    return (
        <div className='footer--container' id="contact">
            <div className='footer--icons'>
                <a className='icon' href='https://github.com/jenniferccao' target='_blank'>
                    <img src='/github.png'></img>
                </a>

                <a className='icon' href='https://www.linkedin.com/in/jenniferrcao/' target='_blank'>
                    <img src='/linkedin.png'></img>
                </a>

                <a className='icon' href='https://dribbble.com/jencao' target='_blank'>
                    <img src='/dribbble.png'></img>
                </a>

                    
            </div>
        </div>
    );
}