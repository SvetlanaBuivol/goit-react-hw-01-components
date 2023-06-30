import UserProfile from 'components/Profile/UserProfile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { data, friends, transactions, user } from 'data';
import { Container } from './App.styled';

export default function App() {
  return (
    <Container>
      <UserProfile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
