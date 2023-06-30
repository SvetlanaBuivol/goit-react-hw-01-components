import { FaUserFriends, FaEye, FaLocationPin } from 'react-icons/fa';
import { AiFillLike, AiFillInstagram } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import PropTypes from 'prop-types';

export default function UserProfile({ avatar, userName, tag, location, followers, views, likes }) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="User avatar"
          className="avatar"
        />
        
        <p className="name"><BsFillPersonFill/>{userName}</p>
        <p className="tag"><AiFillInstagram/>@{tag}</p>
        <p className="location"><MdLocationOn/>{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label"><FaUserFriends/></span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label"><FaEye/></span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label"><AiFillLike/></span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
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