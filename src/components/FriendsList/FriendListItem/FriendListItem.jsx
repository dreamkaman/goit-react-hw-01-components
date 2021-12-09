import PropTypes from 'prop-types';

import styles from './FriendListItem.module.css';

const FriendListItem = ({ status, avatar, name }) => {
  // const { status, avatar, name } = props;
  // console.log(status);
  const statusClass = status
    ? `${styles.status} ${styles.isOnline}`
    : styles.status;

  return (
    <li className={styles.item}>
      <span className={statusClass} />
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};
export default FriendListItem;

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
