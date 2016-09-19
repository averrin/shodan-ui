import React, { Component, PropTypes } from 'react';
import { Line } from 'react-chartjs';
import moment from 'moment';
// import Subheader from 'material-ui/Subheader';
// import styles from './Amount.css';

export default class AccountHistory extends Component {
  static propTypes = {
    history: PropTypes.array,
  }

  shouldComponentUpdate() {
    return this.props.history.length === 0;
  }

  render() {
    const history = this.props.history;
    const data = { datasets: [{
      label: 'Amount',
      data: history.map(e => parseInt(e.Note, 10)),
      fillColor: 'rgba(220,220,220,0.1)',
      strokeColor: 'rgba(10, 142, 184, 1)',
      pointColor: 'rgba(10, 142, 184, 1)',
      pointStrokeColor: '#fff',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
    }],
    labels: history.map(e => moment(e.Timestamp).format('DD.MM HH:mm')),
    };
    return (
      <Line data={data} options={{ responsive: true }} />
    );
  }
}
