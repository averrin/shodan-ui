import React, { Component, PropTypes } from 'react';
import { Line } from 'react-chartjs';
// import Subheader from 'material-ui/Subheader';
// import styles from './Amount.css';

export default class AccountHistory extends Component {
  static propTypes = {
    history: PropTypes.array,
  }
  render() {
    const data = { datasets: [{
        label: 'Amount',
        data: [1 ,3, 5, 6, 7, 9]
      }],
      labels: ["January", "February", "March", "April", "May", "June", "July"],
    };
    return (
      <Line data={data} width="500" height="250" />
    );
  }
}
