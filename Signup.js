import React from 'react';
import logo from './smartagilelogo.png';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form_container p-5 rounded bg-white'>
        <header className="App-header text-center mb-4">
          <img src={logo} className="App-logo img-fluid" alt="logo" style={{ maxWidth: '100px', maxHeight: '75px' }} />
        </header>
        <form>
          <h3 className='text-center'>Create an account</h3>
          <div className='mb-2'>
            <label htmlFor='fname'>First Name</label>
            <input type='text' placeholder='Enter First Name' className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor='lname'>Last Name</label>
            <input type='text' placeholder='Enter Last Name' className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' />
          </div>
          <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Password' className='form-control' />
          </div>
          <div className='d-grid mt-4'>
            <button className='btn btn-primary'>Sign up</button>
          </div>
          <p className='text-end mt-2'>
            Already Registered? <Link to="/" className='ms-2'>Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
