import React, { Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import Work from 'material-ui/svg-icons/places/business-center';
import HomeIcon from 'material-ui/svg-icons/action/home';
import Nowhere from 'material-ui/svg-icons/maps/directions-car';

import styles from './Home.css';

const icons = {
  work: <Work className={styles.icon} />,
  home: <HomeIcon className={styles.icon} />,
  nowhere: <Nowhere className={styles.icon} />,
  village: <Nowhere className={styles.icon} />,
  pavel: <Nowhere className={styles.icon} />,
};

export default class Home extends Component {
  static propTypes = {
    status: PropTypes.shape({
      Place: PropTypes.shape({
        Name: PropTypes.string
      }),
      Amount: PropTypes.shape({
        Value: PropTypes.string
      }),
      Battery: PropTypes.shape({
        Value: PropTypes.string
      }),
    })
  }

  render() {
    const bs = this.props.status.Battery.Value;
    const bStatus = bs === 'normal' ? styles.normal : styles.low;
    return (
      <div>
        <Subheader>Home</Subheader>
        <span className={styles.place}>You are at: {icons[this.props.status.Place.Name]}</span>
        <br />
        <span className={styles.place}>Battery status:
          <span className={bStatus}> {bs}</span>
        </span>
      </div>
    );
  }
}
