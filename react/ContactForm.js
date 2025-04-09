import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit, initialData, isEditing }) => {
  const [form, setForm] = useState({ name: '', phone: '', email: '' });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name.trim()) return alert("Name can't be empty");
    if (!form.phone.trim()) return alert("Phone can't be empty");

    onSubmit({ ...form });
    setForm({ name: '', phone: '', email: '' });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email (optional)"
        value={form.email}
        onChange={handleChange}
      />
      <button type="submit">{isEditing ? 'Update' : 'Add'} Contact</button>
    </form>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
  isEditing: PropTypes.bool,
};

export default ContactForm;
