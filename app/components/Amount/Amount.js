import React, { Component, PropTypes } from 'react';
import styles from './Amount.css';

export default class Amount extends Component {
  static propTypes = {
    value: PropTypes.number,
  }
  render() {
    return (
      <span className={styles.amount}>Amount: {this.props.value}
        <span style={{ color: '#555', fontSize: '10pt' }}>₽</span>
      </span>
    );
  }
}
