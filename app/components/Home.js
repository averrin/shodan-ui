import React, { Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import styles from './Home.css';


export default class Home extends Component {
  static propTypes = {
    status: PropTypes.shape({
      Place: PropTypes.shape({
        Name: PropTypes.string
      }),
      Amount: PropTypes.shape({}),
    })
  }

  render() {
    return (
      <div>
        <Subheader>Home</Subheader>
        <span className={styles.place}>You are at: {this.props.status.Place.Name}</span>
      </div>
    );
  }
}
