import style from './phonebook-app.module.css';

import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class PhonebookApp extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newData => {
    this.setState(prevState => {
      const { contacts } = prevState;
      const { name, number } = newData;
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      if (contacts.find(contact => contact.name === name)) {
        return alert(`${name} is already added!`);
      }

      return {
        contacts: [...contacts, newContact],
        name: ' ',
        number: ' ',
      };
    });
  };

  deleteContact = id => {
    const { contacts } = this.state;
    const updatedList = contacts.filter(contact => contact.id !== id);
    return this.setState({ contacts: updatedList });
  };

  filterChange = ({ target }) => {
    this.setState({
      filter: target.value,
    });
  };

  getFilteredContactsList = () => {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const filterQuery = filter.toLowerCase();
    const filteredItems = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterQuery)
    );
    return filteredItems;
  };

  render() {
    const { addContact, deleteContact, filterChange, getFilteredContactsList } =
      this;
    const contacts = getFilteredContactsList();
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter filterChange={filterChange} />
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      </div>
    );
  }
}

export default PhonebookApp;
