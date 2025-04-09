import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDelete, onEdit }) => {
  return (
    <li className="contact-item">
      <strong>{contact.name}</strong> <br />
      📞 {contact.phone} <br />
      📧 {contact.email}
      <div className="contact-buttons">
        <button onClick={() => onEdit(contact)}>✏️ Edit</button>
        <button onClick={() => onDelete(contact.id)}>🗑️ Delete</button>
      </div>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
  }),
  onDelete: PropTypes.func,
  onEdit: PropTypes.func,
};

export default ContactItem;
