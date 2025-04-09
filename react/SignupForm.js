import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.includes('@')) errs.email = 'Email must be valid';
    if (form.password.length < 6) errs.password = 'Password must be at least 6 characters';
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert('Signup Successful!');
      setForm({ name: '', email: '', password: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signupForm">
      <h2>Sign Up</h2>

      <div>
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p style={{ color: 'red', fontSize: '0.9em', marginTop: 2 }}>{errors.name}</p>
        )}
      </div>

      <div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p style={{ color: 'red', fontSize: '0.9em', marginTop: 2 }}>{errors.email}</p>
        )}
      </div>

      <div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p style={{ color: 'red', fontSize: '0.9em', marginTop: 2 }}>{errors.password}</p>
        )}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default SignupForm;
