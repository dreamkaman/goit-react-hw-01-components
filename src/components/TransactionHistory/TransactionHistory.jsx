import PropTypes from 'prop-types';

import TransactionHistoryItem from './TransactionHistoryItem';

import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  // console.log(props);
  const elements = transactions.map(({ id, type, amount, currency }) => {
    // const { id, type, amount, currency } = transaction;

    return (
      <TransactionHistoryItem
        key={id}
        type={type}
        amount={amount}
        currency={currency}
      />
    );
  });

  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{elements}</tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['invoice', 'payment', 'withdrawal', 'deposit'])
        .isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
