import PropTypes from 'prop-types';

const Contacts = ({ contacts, onRemoveContact }) => {
  contacts.map(contact => (
    <li>
      {contact.name + ' : ' + contact.number}
      <button type="button" onClick={() => onRemoveContact(contact.id)}>
        Delete
      </button>
    </li>
  ));
};

Contacts.propTypes = {
  contacts: PropTypes.object.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default Contacts;
