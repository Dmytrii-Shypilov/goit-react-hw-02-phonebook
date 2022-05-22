import style from './contact-form.module.css';

import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  onSubmitHandle = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
    
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandle}>
        <label className={style.label}>
          Name:
          <input
            onChange={this.onInputChange}
            className={style.field}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={style.label}>
          Number:
          <input
            onChange={this.onInputChange}
            className={style.field}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={style.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
