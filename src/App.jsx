import UserProfile from 'components/Profile/UserProfile';
import user from './user.json';

export default function App() {
  return (
    <div>
      <UserProfile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}
