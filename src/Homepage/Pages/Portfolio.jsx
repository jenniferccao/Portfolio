import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Portfolio() {
    const location = useLocation();
    const projImages = [
        'url("https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/770/450/datas/medium.png")',
        'url("https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/683/754/datas/medium.png")',
        'url("https://example.com/image3.jpg")'
    ];

    const projNames = [
        'TerraTalk',
        'PipStop',
        'Nav Log Calculator'
    ];

    return (
        <div className='port--container' id='portfolio'>
            <div className='port--main'>
                <div className='port--title'>
                    PORTFOLIO
                </div>

                <div className='port--text'>
                    <h2>Projects</h2>
                    
                    <div className='proj--display'>
                        {projImages.map((image, index) => (
                            <div 
                                className='proj--container'
                                style={{ backgroundImage: image, backgroundSize: 'cover' }}
                                key={index}
                            >
                                <div className='proj--name'>
                                    {projNames[index]}
                                </div>
                                <div className='proj--info'>
                                    <div className='proj--tech'>React</div>
                                    <div className='proj--tech'>NodeJS</div>
                                    <div className='proj--tech'>Tool3</div>
                                    <div className='proj--tech'>Tool4</div>
                                    <div className='proj--tech'>Tool5</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2>Design</h2>
                    <div className='design--display'>
                        <div className='design--container'>
                            <img src="https://cdn.dribbble.com/userupload/11243687/file/original-e238407a42bf9fff40388293f9840807.png?resize=2400x1585"></img>
                        </div>

                        <div className='design--container'>
                            <img src="https://cdn.dribbble.com/userupload/9327013/file/original-efd255f169a45139f1454c2d70e1cab8.png?resize=2000x1499"></img>
                        </div>

                        <div className='design--container'></div>
                        <div className='design--container'></div>
                        <div className='design--container'></div>
                        <div className='design--container'></div>
                        <div className='design--container'></div>
                        <div className='design--container'></div>
                        <div className='design--container'></div>
                        <div className='design--container'></div>
                        <div className='design--container'></div>
                        <div className='design--container'></div>
                    
                        <br></br>
                        <div className='see-more-btn--cont'>
                            <a className='see-more--btn' href='https://dribbble.com/jencao' target='_blank'>
                                SEE MORE →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
