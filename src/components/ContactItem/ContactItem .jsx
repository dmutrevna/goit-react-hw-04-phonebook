import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { IoMdContact } from 'react-icons/io';
import { TiDelete } from 'react-icons/ti';
import {
  ContactItemContainer,
  ContactIcon,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactItem.styled';

export class ContactItem extends Component {
  handleDelete = () => {
    const { contact, onDeleteContact } = this.props;
    onDeleteContact(contact.id);
  };

  render() {
    const { contact } = this.props;

    return (
      <ContactItemContainer>
        <ContactIcon>
          <IoMdContact />
        </ContactIcon>
        <ContactName>{contact.name}</ContactName>: tel:
        <ContactNumber>{contact.number}</ContactNumber>
        <DeleteButton type="button" onClick={this.handleDelete}>
          <TiDelete />
        </DeleteButton>
      </ContactItemContainer>
    );
  }
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
