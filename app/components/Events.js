import React, { Component, PropTypes } from 'react';
// import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Smartphone from 'material-ui/svg-icons/hardware/smartphone';
import ChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import LocationOn from 'material-ui/svg-icons/communication/location-on';
import LocationOff from 'material-ui/svg-icons/communication/location-off';
import GroupWork from 'material-ui/svg-icons/action/group-work';
import DVR from 'material-ui/svg-icons/device/dvr';
// import FontIcon from 'material-ui/FontIcon';
// import { red500, green500 } from 'material-ui/styles/colors';
import moment from 'moment';
// import IconButton from 'material-ui/IconButton';
import styles from './Events.css';

const titles = {
  displayActivity: 'Phone display',
  pcActivity: 'PC status',
  message: 'Message',
  startShodan: 'Shodan started',
  leave: 'You left',
  enter: 'You entered',
};

const icons = {
  displayActivity: <Smartphone />,
  pcActivity: <DVR />,
  message: <ChatBubble />,
  startShodan: <GroupWork />,
  leave: <LocationOff />,
  enter: <LocationOn />,
};

class Events extends Component {
  static propTypes = {
    events: PropTypes.array,
  };

  render() {
    const events = this.props.events;
    const items = events.map((e, i) => {
      let title;
      if (e.Note) {
        title = (<span>
          {titles[e.Event]}: <span className={styles.note}>{e.Note}</span>
        </span>);
      } else {
        title = <span>{titles[e.Event]}</span>;
      }
      return (<ListItem
        key={i}
        primaryText={title}
        secondaryText={moment(e.Timestamp).format('DD.MM HH:mm')}
        leftIcon={icons[e.Event]}
      />);
    });
    if (items.length > 0) {
      return (
        <List className={styles.events}>
          <Subheader>Events</Subheader>
          {items}
        </List>
      );
    }
    return (
      <Subheader>No events</Subheader>
    );
  }
}

export default Events;
