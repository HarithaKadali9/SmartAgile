import React, { useState } from 'react';
import logo from '../assets/smartagilelogo.png';
import { Link } from 'react-router-dom';

function Signup() {
  const [form, setForm] = useState({
    fname: '',
    lname: '',
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

    // First name validation
    if (!form.fname) {
      newErrors.fname = 'First name is required';
    } else if (!/^[A-Za-z]+$/.test(form.fname)) {
      newErrors.fname = 'First name should only contain alphabets';
    }

    // Last name validation
    if (!form.lname) {
      newErrors.lname = 'Last name is required';
    } else if (!/^[A-Za-z]+$/.test(form.lname)) {
      newErrors.lname = 'Last name should only contain alphabets';
    }

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
      // Perform signup logic
      console.log('Form submitted', form);
    }
  };

  return (
    <div className='signup template d-flex justify-content-center align-items-center vh-100 bg-primary'>
      <div className='form_container p-5 rounded bg-white'>
        <header className="App-header text-center mb-4">
          <img src={logo} className="App-logo img-fluid" alt="logo" style={{ maxWidth: '100px', maxHeight: '75px' }} />
        </header>
        <form onSubmit={handleSubmit}>
          <h3 className='text-center'>Create an account</h3>
          <div className='mb-2'>
            <label htmlFor='fname'>First Name</label>
            <input
              type='text'
              name='fname'
              placeholder='Enter First Name'
              className='form-control'
              value={form.fname}
              onChange={handleChange}
            />
            {errors.fname && <span className='text-danger'>{errors.fname}</span>}
          </div>
          <div className='mb-2'>
            <label htmlFor='lname'>Last Name</label>
            <input
              type='text'
              name='lname'
              placeholder='Enter Last Name'
              className='form-control'
              value={form.lname}
              onChange={handleChange}
            />
            {errors.lname && <span className='text-danger'>{errors.lname}</span>}
          </div>
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
          <div className='d-grid mt-4'>
            <button type='submit' className='btn btn-primary'>Sign up</button>
          </div>
          <p className='text-end mt-2'>
            Already Registered? <Link to="/" className='ms-2'>Sign in</Link>
          </p>
          <p className='text-end mt-2'>
            Contact me <Link to="/contact" className='ms-2'>Contact</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
