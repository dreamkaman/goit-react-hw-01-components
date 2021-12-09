import PropTypes from 'prop-types';

import styles from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};
export default TransactionHistoryItem;

TransactionHistoryItem.propTypes = {
  type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit'])
    .isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
