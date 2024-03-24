import React from 'react';

export default function HomeBody() {
    return (
        <div className='homebody--container'>
            <div className='homebody--main'>
                <div className='homebody--title'>
                    ABOUT ME
                </div>

                <div className='homebody--text'>
                    <p>
                        Hi! 👋 I'm Jen, a student at the University of Western Ontario pursuing a <b>dual degree in Computer Science and Business Administration</b>. Beyond the technical stuff, I enjoy music, fitness, and aviation.
                    </p>
                    <p>
                        My whole life, I've loved mixing art, technology, and problem solving. As a kid, I spent hours playing with MS Paint and other apps that came with my computer. In grade four, I was introduced to coding and design, and it was exactly what I wanted to learn more about. Building simple games became my favorite creative outlet; I was able to turn abstract ideas into solid product.
                    </p>
                </div>

                <div className='homebody--feat'>
                    <img src='https://media.tenor.com/p34oU47DQ-8AAAAe/monkey-conduciendo.png'></img>
                </div>
            </div>
        </div>
    );
}