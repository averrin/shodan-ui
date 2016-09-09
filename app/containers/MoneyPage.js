import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Money from '../components/Money/Money';
import Loader from '../components/Loader';

function moneyProps(state) {
  return {
    account: state.globalStatus.Amount,
    history: state.accountHistory
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators([], dispatch);
}

const MoneyContainer = connect(moneyProps, mapDispatchToProps)(Money);

class MoneyPage extends Component {
  static propTypes = {
    account: PropTypes.object,
    history: PropTypes.array,
  }

  static contextTypes = {
    datastream: PropTypes.func
  };

  componentWillMount() {
    this.context.datastream().sendCommand('accountHistory');
  }

  render() {
    if (!this.props.account) {
      return (
        <Loader />
      );
    }
    return (
      <div>
        <MoneyContainer />
      </div>
    );
  }
}

export default connect(moneyProps, mapDispatchToProps)(MoneyPage);
