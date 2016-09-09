import settings from 'electron-settings';

class Datastream {
  constructor(actions) {
    const mapping = {
      shodanOnline: actions.setShodanOnline,
      gideonOnline: actions.setGideonOnline,
      accountHistory: actions.setAccountHistory,
      status: actions.status,
    };
    this.sendCommand = this.sendCommand.bind(this);
    this.ready = new Promise(resolve => {
      console.log(settings.getSettingsFilePath());
      settings.get('url').then(url => {
        this.socket = new WebSocket(url);
        this.socket.addEventListener('open', () => {
          settings.get('token').then(token => {
            this.socket.send(JSON.stringify({
              Event: 'auth',
              Note: token,
            }));
            resolve();
          });
        });
        this.socket.addEventListener('message', m => {
          const event = JSON.parse(m.data);
          const action = mapping[event.Event];
          if (action) {
            action(event);
          } else {
            actions.createShodanEvent(event);
          }
        });
      });
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
