import React, { Component, PropTypes } from 'react';
// import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import moment from 'moment';
import styles from './Notes.css';
import NoteItem from './NoteItem';


export default class Notes extends Component {
  static propTypes = {
    notes: PropTypes.array,
    height: PropTypes.number,
  };

  static contextTypes = {
    datastream: PropTypes.func
  };

  componentWillMount() {
    if (this.props.notes.length === 0) {
      this.context.datastream().sendCommand('listNotes');
    }
  }

  componentDidUpdate() {
    if (this.node) {
      this.node.scrollTop = 0;
    }
  }

  render() {
    const notes = this.props.notes;
    const items = notes.map((e, i) => <NoteItem note={e} key={i} />);
    if (items.length > 0) {
      return (
        <List
          className={styles.events}
          style={{ maxHeight: this.props.height }}
          ref={node => this.node = node}
        >
          <Subheader>Notes</Subheader>
          {items}
        </List>
      );
    }
    return (
      <Subheader>No notes</Subheader>
    );
  }
}
