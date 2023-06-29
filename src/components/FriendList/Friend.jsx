import PropTypes from 'prop-types';

export default function Friend({ isOnline, avatar, name }) {
  return (
    <li>
      <span className={isOnline}></span>
      <img src={avatar} alt={name} />
      <p>{name}</p>
    </li>
  );
}

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
