import React, { Component, PropTypes } from 'react';
import styles from './Amount.css';

export default class Amount extends Component {
  static propTypes = {
    value: PropTypes.number,
  }
  componentWillMount() {
    fetch('http://api.fixer.io/latest?base=rub').then(d => {
      if (d.status === 200) {
        return d.json();
      }
    }).then(rates => {
      this.setState({ rates });
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      rates: null
    };
  }

  render() {
    let usd = '';
    if (this.state.rates !== null) {
      usd = (
        <div className={styles.amount}>
          Amount: {(this.props.value * this.state.rates.rates.USD).toFixed(2)}
          <span style={{ color: '#555', fontSize: '10pt' }}>$</span>
        </div>
      );
    }
    return (
      <div>
        <div className={styles.amount}>Amount: {this.props.value}
          <span style={{ color: '#555', fontSize: '10pt' }}>₽</span>
        </div>
        {usd}
      </div>
    );
  }
}
