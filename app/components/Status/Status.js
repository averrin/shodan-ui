import React, { Component, PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import { red500, green500 } from 'material-ui/styles/colors';
import moment from 'moment';
import IconButton from 'material-ui/IconButton';
import styles from './Status.css';

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
      <Paper className={styles.status} zDepth={1}>
        <div className={styles.wrapper}>
          <div className={styles.iconContainer}>
            <IconButton tooltip={`Last seen: ${moment(lastSeen).format('DD.MM HH:mm')}`}>
              <FontIcon
                className="material-icons"
                color={online ? green500 : red500}
              >
                {online ? 'check' : 'error'}
              </FontIcon>
            </IconButton>
          </div>
          <div className={styles.nameContainer}>
            {component}
          </div>
        </div>
      </Paper>
    );
  }
}

export default Status;
