import React from 'react';
import './NewLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter'> 
      <h1>Get exclusive offers On your email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type='email' placeholder='Your email id' />
        <button>Subscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
