import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ filter: value }, console.log(this.state));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filteredContacts = () => {
    const normalizedValue = this.state.filter.toLowerCase().trim();
    return this.state.contacts.filter(contact => {
      return contact.name
        .concat(contact.name)
        .toLowerCase()
        .includes(normalizedValue);
    });
  };

  // checkDuplicateName = name => {
  //   const { contacts } = this.props;
  //   return contacts.some(
  //     contact => contact.name.toLowerCase() === name.toLowerCase()
  //   );
  // };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.formSubmit}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter onChange={this.handleChange} />
        <ContactList
          contacts={this.filteredContacts()}
          deleteContact={this.handleDelete}
        />
      </div>
    );
  }
}
