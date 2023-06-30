import { FaUserFriends, FaEye, FaUserAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillLike, AiFillInstagram } from 'react-icons/ai';
import PropTypes from 'prop-types';
import { Profile, Description, Photo, UserName, UserTag, StatsList } from './UserProfile.styled';

export default function UserProfile({ avatar, userName, tag, location, followers, views, likes }) {
  return (
    <Profile>
      <Description>
        <Photo
          src={avatar}
          alt="User avatar"
          width="150"
        />
        
        <UserName><FaUserAlt size='16'/>{userName}</UserName>
        <UserTag><AiFillInstagram size='18'/>@{tag}</UserTag>
        <p className="location"><FaMapMarkerAlt size='16'/>{location}</p>
      </Description>

      <StatsList>
        <li>
          <FaUserFriends/>
          <span>{followers}</span>
        </li>
        <li>
          <FaEye/>
          <span>{views}</span>
        </li>
        <li>
          <AiFillLike/>
          <span >{likes}</span>
        </li>
      </StatsList>
    </Profile>
  );
}

UserProfile.propTypes = {
    avatar: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
}