import React from 'react';

const Contacts = ({ contacts, deleteContact }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <span>{contact.name}</span>:<span>{contact.number}</span>
          <button onClick={() => deleteContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
