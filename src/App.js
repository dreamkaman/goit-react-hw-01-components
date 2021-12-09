//import PropTypes from 'prop-types';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import FriendsList from './components/FriendsList';
import TransactionHistory from './components/TransactionHistory';

import profileUser from './data/user.json';
import data from './data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import styles from './styles/App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Profile
        userName={profileUser.username}
        tag={profileUser.tag}
        location={profileUser.location}
        avatar={profileUser.avatar}
        stats={profileUser.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
