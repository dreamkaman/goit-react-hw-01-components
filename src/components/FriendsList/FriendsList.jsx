import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

import styles from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
  // console.log(props);
  const elements = friends.map(friend => {
    const { avatar, name, isOnline, id } = friend;
    return (
      <FriendListItem key={id} status={isOnline} avatar={avatar} name={name} />
    );
  });

  return <ul className={styles.friendList}>{elements}</ul>;
};

export default FriendsList;

FriendsList.propTypes = {
  friend: PropTypes.arrayOf({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
    id: PropTypes.number.isRequired,
  }),
};
