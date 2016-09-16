import React, { Component, PropTypes } from 'react';
import styles from './Amount.css';

export default class Amount extends Component {
  static propTypes = {
    value: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.state = {
      rates: null,
      usd: null
    };
  }

  componentWillMount() {
    fetch('http://api.fixer.io/latest?base=rub').then(d => {
      if (d.status === 200) {
        return d.json();
      }
    }).then(d => {
      this.setState({ rates: d.rates });
    });
    fetch('http://api.fixer.io/latest?base=usd').then(d => {
      if (d.status === 200) {
        return d.json();
      }
    }).then(d => {
      this.setState({ usd: d.rates.RUB });
    });
  }

  render() {
    let usd = '';
    if (this.state.rates !== null && this.state.usd !== null) {
      usd = (
        <div className={styles.amount}>
          {this.state.usd}<span style={{ color: '#777', fontSize: '10pt' }}>₽</span> {(this.props.value * this.state.rates.USD).toFixed(2)}
          <span style={{ color: '#777', fontSize: '10pt' }}>$</span>
        </div>
      );
    }
    return (
      <div>
        <div className={styles.amount}>Amount: {this.props.value}
          <span style={{ color: '#777', fontSize: '10pt' }}>₽</span>
        </div>
        {usd}
      </div>
    );
  }
}
