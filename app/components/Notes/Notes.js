import React, { Component, PropTypes } from 'react';
// import Paper from 'material-ui/Paper';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import styles from './Notes.css';
import NoteItem from './NoteItem';
import NoteForm from './NoteForm';


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

  deleteNote(id) {
    this.context.datastream().sendCommand('deleteNote', id);
  }

  addNote(text) {
    this.context.datastream().sendCommand('addNote', text);
  }

  render() {
    const notes = this.props.notes;
    const items = notes.map((e, i) => <NoteItem note={e} key={i} del={this.deleteNote.bind(this)} />);
    if (items.length > 0) {
      return (
        <div>
          <List
            className={styles.events}
            style={{ maxHeight: this.props.height }}
            ref={node => this.node = node}
          >
            <Subheader className="drag">Notes</Subheader>
            {items}
          </List>
          <NoteForm addNote={this.addNote.bind(this)} style={{ zIndex: 100 }} />
        </div>
      );
    }
    return (
      <div>
        <NoteForm addNote={this.addNote.bind(this)} />
        <Subheader className="drag">No notes</Subheader>
      </div>
    );
  }
}
