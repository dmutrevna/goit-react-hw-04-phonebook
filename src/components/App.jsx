import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import {
  AppContainer,
  TitleContacts,
  TitlePhone,
} from './ContactForm/ContactForm.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  isContactDuplicate = newContact => {
    return this.state.contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
  };

  addContact = newContact => {
    if (this.isContactDuplicate(newContact)) {
      Notify.failure(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <AppContainer>
        <TitlePhone>Phonebook</TitlePhone>
        <ContactForm addContact={this.addContact} />
        <TitleContacts>Contacts</TitleContacts>
        <Filter filter={filter} onFilterChange={this.handleFilterChange} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </AppContainer>
    );
  }
}
