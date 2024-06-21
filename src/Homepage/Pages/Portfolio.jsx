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
                            <a className='proj--container' href='https://devpost.com/software/terratalk' target='blank'>
                                <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/770/450/datas/medium.png"></img>
                                <div className='proj--overlay'></div>
                                
                                <a className='proj--name'>
                                    TerraTalk
                                </a>
                                <div className='proj--info'>
                                    <div className='proj--tech'>React</div>
                                    <div className='proj--tech'>NodeJS</div>
                                    <div className='proj--tech'>OpenAI</div>
                                    <div className='proj--tech'>CSS</div>
                                    <div className='proj--tech'>MongoDB</div>
                                </div>
                            </a>

                            <a className='proj--container' href='https://devpost.com/software/pipstop' target='blank'>
                                <img src="https://d112y698adiu2z.cloudfront.net/photos/production/software_thumbnail_photos/002/683/754/datas/medium.png"></img>
                                <div className='proj--overlay'></div>
                                
                                <a className='proj--name'>
                                    PipStop
                                </a>
                                <div className='proj--info'>
                                    <div className='proj--tech'>HTML</div>
                                    <div className='proj--tech'>CSS</div>
                                    <div className='proj--tech'>Javascript</div>
                                    <div className='proj--tech'>NodeJS</div>
                                    <div className='proj--tech'>Infobip</div>
                                </div>
                            </a>

                            <a className='proj--container' href='https://github.com/jenniferccao/navLogCalculator' target='blank'>
                                <img src=""></img>
                                <div className='proj--overlay'></div>
                                
                                <a className='proj--name'>
                                    Nav Log Calculator
                                </a>
                                <div className='proj--info'>
                                    <div className='proj--tech'>Java</div>
                                </div>
                            </a>
                    </div>
                    

                    <h2>Design</h2>
                    <div className='design--display'>
                        <a className='design--container' href='https://dribbble.com/shots/22997694-Outdoor-Poster' target='_blank'>
                            <img src="https://cdn.dribbble.com/userupload/11243687/file/original-e238407a42bf9fff40388293f9840807.png?resize=2400x1585"></img>
                        </a>

                        <a className='design--container' href='https://dribbble.com/shots/22283575-System-Of-A-Down-T-Shirt-Design' target='blank'>
                            <img src="https://cdn.dribbble.com/userupload/9327013/file/original-efd255f169a45139f1454c2d70e1cab8.png?resize=2000x1499"></img>
                        </a>

                        <a className='design--container' href='https://dribbble.com/shots/22710909-JOEY-BADA-World-Domination-Shirt-Design'>
                            <img src="https://cdn.dribbble.com/userupload/10467014/file/original-22abf02319e3afa83e7d2c2fb4a4d457.png?resize=752x"></img>
                        </a>
                        <a className='design--container' href='https://dribbble.com/shots/21238303-Aston-Martin-F1-Poster' target='blank'>
                            <img src="https://cdn.dribbble.com/userupload/6368391/file/original-f3a11c0d831f40222b65edea506c1a9b.jpeg?resize=752x"></img>
                        </a>
                        <a className='design--container' href='https://dribbble.com/shots/15034217-The-Great-Gatsby-Cover-Design' target='blank'>
                            <img src="https://cdn.dribbble.com/users/1183356/screenshots/15034217/media/d60c347fcdd370b3df1e448979c12111.png"></img>
                        </a>
                        <a className='design--container' href='https://dribbble.com/shots/11685806-Richard-III-Movie-Poster' target='blank'>
                            <img src="https://cdn.dribbble.com/users/1183356/screenshots/11685806/media/fcf88afb178c9545b6be1fb2f75d8501.png"></img>
                        </a>
                        <a className='design--container' href='https://dribbble.com/shots/11658946-Ultimate-Frisbee-Team-Crest' target='blank'>
                            <img src="https://cdn.dribbble.com/users/1183356/screenshots/11658946/media/98a64478170ad24a9d61991207587eb2.png"></img>
                        </a>
                        <a className='design--container' href='https://dribbble.com/shots/14492254-VPAC-logo-2020' target='blank'>
                            <img src="https://cdn.dribbble.com/users/1183356/screenshots/14492254/media/694ebf785708de33cbb0fa820e86597b.png"></img>
                        </a>
                        <a className='design--container' href='https://dribbble.com/shots/19826099-Canadarm' target='blank'>
                            <img src="https://cdn.dribbble.com/users/1183356/screenshots/19826099/media/7c79d41b3054411fa12926e789c3c90b.png"></img>
                        </a>
                        <a className='design--container' href='https://dribbble.com/shots/23330844-Retro-Chrome-Metallic-Lettering' target='blank'>
                            <img src="https://cdn.dribbble.com/userupload/12163031/file/original-5418e6af2518be9a3452d257007d2043.png?resize=752x"></img>
                        </a>
                        <a className='design--container' href='https://dribbble.com/shots/22314776-F1-Alex-Albon-Branding' target='blank'>
                            <img src="https://cdn.dribbble.com/userupload/9408730/file/original-d03ea85a15da94c3b5685a0dc323f007.png?resize=752x"></img>
                        </a>
                        <a className='design--container' href='https://dribbble.com/shots/22304717-F1-Carlos-Sainz-55' target='blank'>
                            <img src="https://cdn.dribbble.com/userupload/9382096/file/original-45cb3450c6da10f20613a7bf0bf5515d.png?resize=752x"></img>
                        </a>
                    
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
