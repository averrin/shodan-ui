import React, { Component, PropTypes } from 'react';
// import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import moment from 'moment';
import styles from './Events.css';
import EventItem from './EventItem';


class Events extends Component {
  static propTypes = {
    events: PropTypes.array,
    height: PropTypes.number,
  };

  static contextTypes = {
    datastream: PropTypes.func
  };

  componentWillMount() {
    if (this.props.events.length < 2) {
      this.context.datastream().sendCommand('eventsHistory');
    }
  }

  componentDidUpdate() {
    this.node.scrollTop = 0;
  }

  render() {
    const events = this.props.events.slice();
    events.sort((a, b) => {
      const am = moment(a.Timestamp);
      const bm = moment(b.Timestamp);
      if (am > bm) {
        return -1;
      }
      if (am === bm) {
        return 0;
      }
      return 1;
    });
    const items = events.map((e, i) => <EventItem event={e} key={i} />);
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
