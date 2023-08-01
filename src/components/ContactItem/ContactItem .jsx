import React from 'react';
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

export const ContactItem = ({ contact, onDeleteContact }) => {
  const handleDelete = () => {
    onDeleteContact(contact.id);
  };

  return (
    <ContactItemContainer>
      <ContactIcon>
        <IoMdContact />
      </ContactIcon>
      <ContactName>{contact.name}</ContactName>: tel:
      <ContactNumber>{contact.number}</ContactNumber>
      <DeleteButton type="button" onClick={handleDelete}>
        <TiDelete />
      </DeleteButton>
    </ContactItemContainer>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
