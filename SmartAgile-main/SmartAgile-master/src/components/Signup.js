import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/smartagilelogo.png";
import { Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    // First name validation
    if (!form.first_name) {
      newErrors.first_name = "First name is required";
    } else if (!/^[A-Za-z]+$/.test(form.first_name)) {
      newErrors.first_name = "First name should only contain alphabets";
    }

    // Last name validation
    if (!form.last_name) {
      newErrors.last_name = "Last name is required";
    } else if (!/^[A-Za-z]+$/.test(form.last_name)) {
      newErrors.last_name = "Last name should only contain alphabets";
    }

    // Email validation
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is not valid";
    }

    // Password validation
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 8 || form.password.length > 12) {
      newErrors.password = "Password must be between 8 and 12 characters";
    } else if (
      !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%&*])/.test(form.password)
    ) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character (@#$%&*)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Perform signup logic using Axios
      axios
        .post("http://127.0.0.1:8000/api/signup/", form, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setMessage("Signup successful!");
          console.log("Form submitted", response.data);
        })
        .catch((error) => {
          setMessage("Signup failed. Please try again.");
          console.error("There was an error!", error);
        });
    }
  };

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <header className="App-header text-center mb-4">
          <img
            src={logo}
            className="App-logo img-fluid"
            alt="logo"
            style={{ maxWidth: "100px", maxHeight: "75px" }}
          />
        </header>
        <form onSubmit={handleSubmit}>
          <h3 className="text-center">Create an account</h3>
          <div className="mb-2">
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              name="first_name"
              placeholder="Enter First Name"
              className="form-control"
              value={form.first_name}
              onChange={handleChange}
            />
            {errors.first_name && (
              <span className="text-danger">{errors.first_name}</span>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              name="last_name"
              placeholder="Enter Last Name"
              className="form-control"
              value={form.last_name}
              onChange={handleChange}
            />
            {errors.last_name && (
              <span className="text-danger">{errors.last_name}</span>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="form-control"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-control"
              value={form.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          {message && <div className="text-center text-success">{message}</div>}
          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
          </div>
          <p className="text-end mt-2">
            Already Registered?{" "}
            <Link to="/" className="ms-2">
              Sign in
            </Link>
          </p>
          <p className="text-end mt-2">
            Contact me{" "}
            <Link to="/contact" className="ms-2">
              Contact
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
