import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Status.css';

class Status extends Component {
  static propTypes = {
    shodan: PropTypes.shape({
      online: PropTypes.boolean,
      lastSeen: PropTypes.string,
    })
  };

  render() {
    const { online, lastSeen } = this.props.shodan;
    return (
      <div>
        <div className={styles.backButton}>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div className={`${styles.status}`} title={`Last seen: ${lastSeen}`}>
          {online ? 'Online' : 'Offline'}
        </div>
      </div>
    );
  }
}

export default Status;
