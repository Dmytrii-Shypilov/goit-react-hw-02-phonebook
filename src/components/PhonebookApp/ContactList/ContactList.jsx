import style from './contact-list.module.css';

import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const ContactList = ({ contacts, deleteContact }) => {
  const elements = contacts.map(contact => {
    const { name, number, id } = contact;
    return (
      <li key={id}>
        {name} {number}
        <button type="button" onClick={() => deleteContact(id)}>
          Delete
        </button>
      </li>
    );
  });
  return <ul>{elements}</ul>;
};

export default ContactList;
