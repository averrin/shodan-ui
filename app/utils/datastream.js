import settings from 'electron-settings';

class Datastream {
  constructor(actions) {
    this.connected = false;
    this.mapping = {
      shodanOnline: actions.setShodanOnline,
      gideonOnline: actions.setGideonOnline,
      accountHistory: actions.setAccountHistory,
      status: actions.status,
    };
    this.actions = actions;
    this.sendCommand = this.sendCommand.bind(this);
    this.ready = new Promise(resolve => {
      console.log(settings.getSettingsFilePath()); //eslint-disable-line
      settings.get('url').then(url => {
        this.url = url;
        this.connect(resolve);
      });
    });
  }

  connect(resolve) {
    this.socket = new WebSocket(this.url);
    this.socket.addEventListener('open', () => {
      this.connected = true;
      settings.get('token').then(token => {
        this.socket.send(JSON.stringify({
          Event: 'auth',
          Note: token,
        }));
        resolve();
      });
    });
    this.socket.addEventListener('close', () => {
      this.socket = null;
      this.connected = false;
      const reconnect = () => {
        if (!this.connected) {
          setTimeout(() => this.connect(resolve), 2000);
        }
      };
      reconnect();
    });
    this.socket.addEventListener('message', m => {
      const event = JSON.parse(m.data);
      const action = this.mapping[event.Event];
      if (action) {
        action(event);
      } else {
        this.actions.createShodanEvent(event);
      }
    });
  }

  sendCommand(command, note) {
    this.ready.then(() => {
      this.socket.send(JSON.stringify({
        Event: command,
        Note: note,
      }));
    });
  }
}

export default Datastream;
