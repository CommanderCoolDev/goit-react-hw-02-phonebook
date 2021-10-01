import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}: </span>
          <span>{number}</span>
          <button onClick={() => onDelete(id)}>DELETE!!!!!</button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};
