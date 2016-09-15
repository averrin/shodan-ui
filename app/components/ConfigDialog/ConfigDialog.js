import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import settings from 'electron-json-storage';

export default class ConfigDialog extends Component {
  state = {
    open: true,
    token: null,
    url: null
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  changeToken(event) {
    this.setState({
      token: event.target.value
    });
  }

  changeURL(event) {
    this.setState({
      url: event.target.value
    });
  }

  applySettings() {
    settings.set('url', this.state.url, () => {
      settings.set('token', this.state.token, () => {
        window.location.reload();
      });
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Apply"
        primary
        onTouchTap={this.applySettings.bind(this)}
      />,
    ];

    return (
      <Dialog
        title="Can not connect to server"
        actions={actions}
        modal
        open={this.state.open}
      >
        Please specify correct API credentials.<br />
        <TextField
          hintText="ws://localhost:9999/ws"
          floatingLabelText="API endpoint url"
          onChange={this.changeURL.bind(this)}
          style={{ minWidth: 400 }}
        /><br />
        <TextField
          hintText="Ask Shodan for that"
          floatingLabelText="Access token"
          onChange={this.changeToken.bind(this)}
          style={{ minWidth: 400 }}
        />
      </Dialog>
    );
  }
}
