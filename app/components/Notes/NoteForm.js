
import React, { Component, PropTypes } from 'react';
// import { emojify } from 'react-emojione';
import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const style = {
  bottom: 20,
  right: 20,
  position: 'fixed'
};

export default class NoteItem extends Component {
  static propTypes = {
    addNote: PropTypes.func
  };

  state = {
    open: false,
    text: null,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  changeText = e => {
    this.setState({ text: e.target.value });
  };

  saveNote = () => {
    if (this.state.text !== null && this.state.text.trim().length !== 0) {
      this.props.addNote(this.state.text);
      this.setState({ open: false });
    }
  };


  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        onTouchTap={() => { this.handleClose(); }}
      />,
      <FlatButton
        label="Save"
        primary
        onTouchTap={() => { this.saveNote(); }}
      />,
    ];
    let et;
    if (this.state.text !== null && this.state.text.trim().length === 0) {
      et = 'This field is required.';
    }
    return (
      <div>
        <FloatingActionButton
          style={style}
          onTouchTap={() => { this.handleOpen(); }}
        >
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title="Create new note."
          actions={actions}
          open={this.state.open}
        >
          <TextField
            multiLine
            errorText={et}
            rows={2}
            hintText="Note text"
            style={{ width: '100%' }}
            onChange={this.changeText.bind(this)}
          />
        </Dialog>
      </div>
    );
  }
}
