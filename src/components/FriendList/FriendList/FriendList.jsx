import PropTypes from 'prop-types';
import Friend from '../Friend/Friend';
import { FriendContainer } from "./FriendList.styled";

export default function FriendList({ friends }) {
    console.log(friends)
  return (
    <FriendContainer>
      {friends.map(friend => (
          <Friend   
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
          />
      ))}
    </FriendContainer>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
