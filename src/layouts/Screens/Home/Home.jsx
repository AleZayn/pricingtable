import React from 'react';
import Cards from '../Cards/Cards';
import './Home.css';

function Home() {
  return (
    <>
    <div className='home-root'>
      <h1 className='home-heading'>Pricing</h1>
      <p>Quickly build an effective pricing table for your potential customers with this example clone from some task. It's built with default React-js components from scratch.</p>
      <Cards />
    </div>
    
    </>
  )
}

export default Home