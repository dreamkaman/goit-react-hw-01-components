import PropTypes from 'prop-types';

import StatisticsItem from './StatisticsItem';

import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  // const { title, stats } = props;

  const elements = stats.map(statsItem => {
    const { id, label, percentage } = statsItem;

    return <StatisticsItem key={id} label={label} percentage={percentage} />;
  });

  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>{elements}</ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
