import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ConfigDialog extends Component {
  state = {
    open: true,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton
        label="Apply"
        primary
        onTouchTap={() => window.location.reload()}
      />,
    ];

    return (
      <Dialog
        title="Can not connect to server"
        actions={actions}
        modal
        open={this.state.open}
      >
        Please specify correct API endpoint and Access Token.
      </Dialog>
    );
  }
}
