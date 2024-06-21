import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToAnchor = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
};

export default function HomeFooter() {
  return (
    <div className='footer--container' id="contact">
      <ScrollToAnchor />
      <div className='footer--icon--box'>
        <div className='footer--icons'>
          <a className='icon' href='https://github.com/jenniferccao' target='_blank' rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/github.png`} alt='GitHub'></img>
          </a>

          <a className='icon' href='https://www.linkedin.com/in/jenniferrcao/' target='_blank' rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt='LinkedIn'></img>
          </a>

          <a className='icon' href='https://dribbble.com/jencao' target='_blank' rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/dribbble.png`} alt='Dribbble'></img>
          </a>
        </div>
      </div>

      <div className='footer--text'>
        Jennifer Cao 2024
      </div>
    </div>
  );
}
