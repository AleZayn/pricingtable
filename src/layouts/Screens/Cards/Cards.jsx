import React from 'react';
import { Link } from "react-router-dom";
import './Cards.css';

function Cards() {
  return (
    <div className='card-root'>


    <div className='card-container'>
        <div className='title'>
          <h2>Free</h2>
        </div>
        <div>
          <h4>$0 <span>/ mo</span></h4>
        </div>
        <div className='card-content'>
          <p>20 user included</p>
          <p>10 GB of storage</p>
          <p>Priority email support </p>
          <p>Help center access</p>
          <div className='link btn-first'>
            <Link to="login" style={{color: '#007bff'}}>Get started</Link>
          </div>
        </div>
    </div>


    <div className='card-container'>
       <div className='title'>
       <h2>Pro</h2>
       </div>
       <div>
          <h4>$15 <span>/ mo</span></h4>
        </div>
        <div className='card-content'>
          <p>20 user included</p>
          <p>10 GB of storage</p>
          <p>Priority email support </p>
          <p>Help center access</p>
          <div className='link'>
            <Link to="login">Get started</Link>
          </div>
        </div>
    </div>


    <div className='card-container'>
        <div className='title'>
        <h2>Enterprise</h2>
        </div>
        <div>
          <h4>$29 <span>/ mo</span></h4>
        </div>
        <div className='card-content'>
          <p>20 user included</p>
          <p>10 GB of storage</p>
          <p>Priority email support </p>
          <p>Help center access</p>
          <div className='link'>
            <Link to="login">Get started</Link>
          </div>
        </div>
    </div>


    </div>
  )
}

export default Cards;