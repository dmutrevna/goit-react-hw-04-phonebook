import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormContainer, SubTitle } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    this.props.addContact({ id: nanoid(), name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <SubTitle>Name</SubTitle>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={this.handleChange}
        />
        <SubTitle>Number</SubTitle>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={this.handleChange}
        />
        <button type="submit">Add contact</button>
      </FormContainer>
    );
  }
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
