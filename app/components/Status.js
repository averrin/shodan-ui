import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import styles from './Status.css';

const style = {
  height: 50,
  width: 140,
  margin: 20,
  textAlign: 'left',
  padding: 15,
  display: 'inline-block',
};

class Status extends Component {
  static propTypes = {
    name: PropTypes.string,
    component: PropTypes.shape({
      online: PropTypes.boolean,
      lastSeen: PropTypes.string,
    })
  };

  render() {
    const { online, lastSeen } = this.props.component;
    const component = this.props.name;
    return (
      <Paper style={style} zDepth={1}>
        <div className={`${styles.status}`} title={`Last seen: ${lastSeen}`}>
          {component}: {online ? 'Online' : 'Offline'}
        </div>
      </Paper>
    );
  }
}

export default Status;
