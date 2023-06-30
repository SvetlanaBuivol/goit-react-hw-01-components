import PropTypes from 'prop-types';
import { FriendCard, FriendPhoto, FriendName } from "./Friend.styled";

export default function Friend({ isOnline, avatar, name }) {
  return (
    <FriendCard>
      <FriendPhoto src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
      <span status={isOnline.toString()}></span>
    </FriendCard>
  );
}

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
