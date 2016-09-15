import React, { Component, PropTypes } from 'react';
// import Paper from 'material-ui/Paper';
import { emojify } from 'react-emojione';
import { ListItem } from 'material-ui/List';
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
import Notes from 'material-ui/svg-icons/action/book';
import Delete from 'material-ui/svg-icons/action/delete';
// import FontIcon from 'material-ui/FontIcon';
import { blue500 } from 'material-ui/styles/colors';
import moment from 'moment';
// import Linkify from 'react-linkify';
// import IconButton from 'material-ui/IconButton';
import styles from './Events.css';

const options = {
  convertShortnames: true,
  convertUnicode: true,
  convertAscii: true,
  // styles: {
  //     backgroundImage: 'url(emojione.sprites.png)',
  //     width: '32px',
  //     height: '32px',
  //     margin: '4px'
  // },
};

const titles = {
  displayActivity: 'Phone display',
  pcActivity: 'PC status',
  message: 'Message',
  startShodan: 'Shodan started',
  leave: 'You left',
  enter: 'You entered',
  auth: 'Authorization',
  startWeb: 'Server started',
  note: 'Note created',
  noteDeleted: 'Note deleted',
  notesCleared: 'Notes cleared',
};

const icons = {
  displayActivity: <Smartphone />,
  pcActivity: <DVR />,
  message: <ChatBubble />,
  startShodan: <GroupWork style={{ transform: 'rotate(180deg)' }} />,
  leave: <LocationOff />,
  enter: <LocationOn />,
  auth: <Lock />,
  note: <Notes />,
  noteDeleted: <Delete />,
  notesCleared: <Delete />,
  startWeb: <Cloud />,
  say: <ChatBubble color={blue500} />,
  sayDirect: <ChatBubble color={blue500} />,
};

export default class EventItem extends Component {
  static propTypes = {
    event: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  render() {
    let title;
    const e = this.props.event;
    if (e.Event === 'say' || e.Event === 'sayDirect') {
      if (Array.isArray(e.Note)) {
        e.Note = e.Note.map((n, i) => <div key={i}>{n}</div>);
      } else {
        e.Note = emojify(e.Note, options);
      }
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
          style={{ margin: 0 }}
          badgeContent={e.count} primary
        >{icons[e.Event]}
        </Badge>
      );
    } else {
      icon = icons[e.Event];
    }
    const t = moment(e.Timestamp);
    const timestamp = !this.state.hovered ?
      <div title={t.format('DD.MM HH:mm')}>{t.fromNow()}</div> :
      <div title={t.fromNow()}>{t.format('DD.MM HH:mm')}</div>;
    return (<ListItem
      primaryText={title}
      secondaryText={timestamp}
      leftIcon={icon || <Announcment />}
      onMouseEnter={() => this.setState({ hovered: true })}
      onMouseLeave={() => this.setState({ hovered: false })}
    />);
  }
}
