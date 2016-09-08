import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Money from '../components/Money/Money';

const style = {
  refresh: {
    position: 'relative',
    marginLeft: '25%',
    marginTop: '50%',
  }
};

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

  render() {
    if (!this.props.account) {
      return (
        <RefreshIndicator
          size={50}
          left={70}
          top={0}
          loadingColor={"#FF9800"}
          status="loading"
          style={style.refresh}
        />
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
