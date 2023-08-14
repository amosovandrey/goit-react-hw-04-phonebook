import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={css.list}>
    {contacts.map(contact => (
      <li className={css.list__item} key={contact.id}>
        <span className={css.list__item__name}>{contact.name}:</span>
        <span className={css.list__item__number}>{contact.number}</span>
        <button
          className={css.list__delete__btn}
          type="button"
          onClick={() => onDeleteContact(contact.id)}
        >
          x
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
