import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { FaTrashAlt, FaUserAlt } from 'react-icons/fa';

function Contact({ name, number, onDeleteContact, contactId }) {
  return (
    <>
      <div className={css.wrap}>
        <span className={css.icon}>
          <FaUserAlt />
        </span>
        <p>{name}</p>
      </div>
      <div className={css.wrap}>
        <p className={css.number}>{number}</p>
        <button
          className={css.button}
          type="button"
          onClick={() => onDeleteContact(contactId)}
        >
          <FaTrashAlt />
        </button>
      </div>
    </>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;