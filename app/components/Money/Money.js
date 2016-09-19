import React, { Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
// import styles from './Money.css';
import Amount from '../Amount/Amount';
import AccountHistory from '../AccountHistory/AccountHistory';

export default class Money extends Component {
  static propTypes = {
    account: PropTypes.object,
    history: PropTypes.array,
  }
  render() {
    return (
      <div>
        <Subheader className="drag">Account status</Subheader>
        <Amount value={parseInt(this.props.account.Value, 10)} />
        <Subheader>Account history</Subheader>
        <AccountHistory history={this.props.history} />
      </div>
    );
  }
}
