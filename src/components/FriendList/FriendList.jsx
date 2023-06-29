import PropTypes from 'prop-types';
import Friend from './Friend';

export default function FriendList({ friends }) {
    console.log(friends)
  return (
    <ul className="friend-list">
      {friends.map(friend => (
          <Friend   
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
          />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
