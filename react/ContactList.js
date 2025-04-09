import React, { useState } from 'react';
import ContactItem from './ContactItem';
import ContactForm from './ContactForm';
import './ContactList.css';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [editingContact, setEditingContact] = useState(null);

  const addContact = contact => {
    setContacts([...contacts, { ...contact, id: Date.now() }]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const updateContact = updated => {
    setContacts(contacts.map(c => c.id === updated.id ? updated : c));
    setEditingContact(null);
  };

  const startEdit = contact => {
    setEditingContact(contact);
  };

  return (
    <div className="contact-list-container">
      <h2>📇 Contact List</h2>

      <ContactForm
        onSubmit={editingContact ? updateContact : addContact}
        initialData={editingContact}
        isEditing={!!editingContact}
      />

      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        <ul className="contact-list">
          {contacts.map(contact => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDelete={deleteContact}
              onEdit={startEdit}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
