import React, { useState } from 'react';
import './FormExample.css';

const FormExample = () => {
  const [form, setForm] = useState({
    username: '',
    age: '',
    email: '',
    password: '',
    bio: '',
    agree: false,
    gender: '',
    country: '',
    file: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value, type, checked, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]:
        type === 'checkbox' ? checked :
        type === 'file' ? files[0] :
        value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.username.trim()) newErrors.username = 'Username is required';
    if (!form.age || isNaN(form.age) || parseInt(form.age) <= 0) newErrors.age = 'Enter a valid age';
    if (!form.email) newErrors.email = 'Email is required';
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) newErrors.email = 'Invalid email format';

    if (!form.password) newErrors.password = 'Password is required';
    else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (!form.bio.trim()) newErrors.bio = 'Bio is required';
    if (!form.agree) newErrors.agree = 'You must agree to the terms';
    if (!form.gender) newErrors.gender = 'Please select gender';
    if (!form.country) newErrors.country = 'Select a country';
    if (!form.file) newErrors.file = 'Upload a file';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', form);
      alert('Form submitted! Check the console.');
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>📝 Controlled Form with Validation</h2>

      <label>
        Username:
        <input type="text" name="username" value={form.username} onChange={handleChange} />
        {errors.username && <span className="error">{errors.username}</span>}
      </label>

      <label>
        Age:
        <input type="number" name="age" value={form.age} onChange={handleChange} />
        {errors.age && <span className="error">{errors.age}</span>}
      </label>

      <label>
        Email:
        <input type="email" name="email" value={form.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </label>

      <label>
        Password:
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}
      </label>

      <label>
        Bio:
        <textarea name="bio" value={form.bio} onChange={handleChange}></textarea>
        {errors.bio && <span className="error">{errors.bio}</span>}
      </label>

      <label>
        <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
        I agree to the terms
        {errors.agree && <span className="error">{errors.agree}</span>}
      </label>

      <div className="radio-group">
        Gender:
        <label><input type="radio" name="gender" value="male" checked={form.gender === 'male'} onChange={handleChange} /> Male</label>
        <label><input type="radio" name="gender" value="female" checked={form.gender === 'female'} onChange={handleChange} /> Female</label>
        <label><input type="radio" name="gender" value="other" checked={form.gender === 'other'} onChange={handleChange} /> Other</label>
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div>

      <label>
        Country:
        <select name="country" value={form.country} onChange={handleChange}>
          <option value="">--Select--</option>
          <option value="in">India</option>
          <option value="us">USA</option>
          <option value="uk">UK</option>
        </select>
        {errors.country && <span className="error">{errors.country}</span>}
      </label>

      <label>
        Upload File:
        <input type="file" name="file" onChange={handleChange} />
        {form.file && <p>Selected: {form.file.name}</p>}
        {errors.file && <span className="error">{errors.file}</span>}
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
