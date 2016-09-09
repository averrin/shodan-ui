import React, { Component, PropTypes } from 'react';
// import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import styles from './Events.css';
import EventItem from './EventItem';


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
    const items = events.map((e, i) => <EventItem event={e} key={i} />);
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
