import React from 'react';
import { Link } from "react-router-dom";
import { useForm } from '@formcarry/react';
import './Login.css';

function Login() {


  const {state, submit} = useForm({
    id: 'I0YqrQiH5J-'
  });

  if (state.submitted) {
    return (
      <div className='submit-data'>
        <div className='msgs'>Thank you! We received your submission.
        </div>
        <Link to="/" className='btn-back'>Go Back</Link>
      </div>
    );
  };


  return (
    <div className='login-root'>

  <form onSubmit={submit} className="form">

  {/* <label htmlFor="text" className='textinput'>Name : </label> */}
  {/* <br /> */}
        <input className='textinput' id="text" placeholder='Enter your name' type="text" name="text"/>
{/* <br /> */}
        {/* <label className='textinput' htmlFor="email">Email : </label> */}
        <br />
        <input className='textinput' id="email" placeholder='Enter your email' type="email" name="email"/>
 {/* <br /> */}
        {/* <label className='textinput msg' htmlFor="message">Message : </label> */}
        <br />
        <textarea className='textinput ' id="message" name="message" placeholder='enter your choice'/>
 <br />
        <button type="submit" className='btn-submit'>Send</button>
    </form>


</div>

   
  )
}

export default Login;