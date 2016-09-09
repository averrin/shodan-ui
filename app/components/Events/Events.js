import React, { Component, PropTypes } from 'react';
// import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Badge from 'material-ui/Badge';
import Smartphone from 'material-ui/svg-icons/hardware/smartphone';
import ChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import LocationOn from 'material-ui/svg-icons/communication/location-on';
import LocationOff from 'material-ui/svg-icons/communication/location-off';
import GroupWork from 'material-ui/svg-icons/action/group-work';
import Lock from 'material-ui/svg-icons/action/lock';
import Cloud from 'material-ui/svg-icons/file/cloud';
import DVR from 'material-ui/svg-icons/device/dvr';
import Announcment from 'material-ui/svg-icons/action/announcement';
// import FontIcon from 'material-ui/FontIcon';
import { blue500 } from 'material-ui/styles/colors';
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
  auth: 'Authorization',
  startWeb: 'Server started',
};

const icons = {
  displayActivity: <Smartphone />,
  pcActivity: <DVR />,
  message: <ChatBubble />,
  startShodan: <GroupWork />,
  leave: <LocationOff />,
  enter: <LocationOn />,
  auth: <Lock />,
  startWeb: <Cloud />,
  say: <ChatBubble color={blue500} />,
  sayDirect: <ChatBubble color={blue500} />,
};

class Events extends Component {
  static propTypes = {
    events: PropTypes.array,
    height: PropTypes.number,
  };

  componentDidUpdate() {
    this.node.scrollTop = 0;
  }

  render() {
    const events = this.props.events;
    const items = events.map((e, i) => {
      let title;
      if (e.Event === 'say' || e.Event === 'sayDirect') {
        title = (<span>
          <span className={styles.say}>{e.Note}</span>
        </span>);
      } else if (e.Note) {
        title = (<span>
          {titles[e.Event]}: <span className={styles.note}>{e.Note}</span>
        </span>);
      } else {
        title = <span>{titles[e.Event]}</span>;
      }
      let icon;
      if (e.count && e.count > 1) {
        icon = (
          <Badge
            style={{
              margin: 0
            }}
            badgeContent={e.count}
            primary={true}
          >{icons[e.Event]}
          </Badge>
        );
      } else {
        icon = icons[e.Event];
      }
      const t = moment(e.Timestamp);
      return (<ListItem
        key={i}
        primaryText={title}
        secondaryText={`${t.format('DD.MM HH:mm')} (${t.fromNow()})`}
        leftIcon={icon || <Announcment />}
      />);
    });
    items.reverse();
    if (items.length > 0) {
      return (
        <List
          className={styles.events}
          style={{ maxHeight: this.props.height }}
          ref={node => this.node = node}
        >
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
