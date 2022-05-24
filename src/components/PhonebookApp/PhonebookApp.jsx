import style from './phonebook-app.module.css';

import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class PhonebookApp extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newData => {
    const { contacts } = this.state;
    const { name, number } = newData;

    if (contacts.find(contact => contact.name === name)) {
      return alert(`${name} is already added!`);
    }

    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      };

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
      <div className={style.bookSection}>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2 className={style.title}>Contacts</h2>
        <Filter filterChange={filterChange} />
        <ContactList contacts={contacts} deleteContact={deleteContact} />
      </div>
    );
  }
}

export default PhonebookApp;
