import React, { Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import RefreshIndicator from 'material-ui/RefreshIndicator';
// import styles from './Money.css';
import Amount from '../Amount/Amount';

const style = {
  refresh: {
    position: 'relative',
    marginLeft: '25%',
    marginTop: '50%',
  }
};

export default class Money extends Component {
  static propTypes = {
    account: PropTypes.object,
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
        <Subheader>Account status</Subheader>
        <Amount value={parseInt(this.props.account.Value, 10)} />
      </div>
    );
  }
}
