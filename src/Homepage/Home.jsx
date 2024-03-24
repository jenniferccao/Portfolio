import React from 'react';

function MyButton() {
    return (
      <button className="btn--port">
      Portfolio
      </button>
    );
}

export default function Home () {
    return (
      <div className='banner--container'>
          <div className='home--titles'>
          <h3>Hi, I'm</h3>
          <h1>Jennifer Cao</h1>
          <h3>Frontend Developer / Graphic Designer</h3>
          <MyButton />
          </div>
      </div>
     
    );
}

