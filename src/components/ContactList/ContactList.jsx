import React, { Component } from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem ';
import PropTypes from 'prop-types';

export class ContactList extends Component {
  render() {
    const { contacts, onDeleteContact } = this.props;

    return (
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
