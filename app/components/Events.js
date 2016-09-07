import React, { Component, PropTypes } from 'react';
// import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
// import FontIcon from 'material-ui/FontIcon';
// import { red500, green500 } from 'material-ui/styles/colors';
import moment from 'moment';
// import IconButton from 'material-ui/IconButton';
import styles from './Events.css';

class Events extends Component {
  static propTypes = {
    events: PropTypes.array,
  };

  render() {
    const events = this.props.events;
    const items = events.map(e => (<ListItem
      primaryText={`${e.Event} [${e.Note}]`}
      secondaryText={moment(e.Timestamp).format('DD.MM HH:mm')}
    />));
    return (
      <List className={styles.events}>
        {items}
      </List>
    );
  }
}

export default Events;
