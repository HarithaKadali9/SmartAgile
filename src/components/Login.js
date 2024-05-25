import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from '../assets/smartagilelogo.png';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!form.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Email is not valid';
    }

    // Password validation
    if (!form.password) {
      newErrors.password = 'Password is required';
    } else if (form.password.length < 8 || form.password.length > 12) {
      newErrors.password = 'Password must be between 8 and 12 characters';
    } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%&*])/.test(form.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@#$%&*)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Perform login logic
      console.log('Form submitted', form);
    }
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form_container p-5 rounded bg-white'>
        <header className="App-header text-center mb-4">
          <img src={logo} className="App-logo img-fluid" alt="logo" style={{ maxWidth: '100px', maxHeight: '75px' }} />
        </header>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center'>Sign in</h3>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              placeholder='Enter Email'
              className='form-control'
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <span className='text-danger'>{errors.email}</span>}
          </div>
          <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              placeholder='Enter Password'
              className='form-control'
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && <span className='text-danger'>{errors.password}</span>}
          </div>
          <div className='mb-2'>
            <input type='checkbox' className='custom-control custom-checkbox' id='check' />
            <label htmlFor='check' className='custom-input-label ms-2'> Remember me</label>
          </div>
          <div className='d-grid'>
            <button type='submit' className='btn btn-primary'>Sign in</button>
          </div>
          <p className='text-end mt-2'>
            Forget<a href="">Password</a><Link to="/signup" className='ms-2'>Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
