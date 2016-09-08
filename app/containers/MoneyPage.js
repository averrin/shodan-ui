import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Money from '../components/Money/Money';

function moneyProps(state) {
  return {
    account: state.globalStatus.Amount
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators([], dispatch);
}

const MoneyContainer = connect(moneyProps, mapDispatchToProps)(Money);

export default class HomePage extends Component {
  render() {
    return (
      <MoneyContainer />
    );
  }
}
