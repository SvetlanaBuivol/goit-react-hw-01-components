import PropTypes from 'prop-types';
import { FriendCard, FriendPhoto, FriendName, StatusSpan } from "./Friend.styled";

export default function Friend({ isOnline, avatar, name }) {
  return (
    <FriendCard>
      <FriendPhoto src={avatar} alt={name} />
      <FriendName>{name}</FriendName>
      <StatusSpan status={isOnline.toString()}></StatusSpan>
    </FriendCard>
  );
}

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
