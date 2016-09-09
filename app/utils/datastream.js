import settings from 'electron-settings';
import {
  setShodanOnline, createShodanEvent, setGideonOnline, status,
  setAccountHistory
} from '../actions/shodan';

const mapping = {
  shodanOnline: setShodanOnline,
  gideonOnline: setGideonOnline,
  accountHistory: setAccountHistory,
  status,
};

class Datastream {
  constructor(store) {
    console.log(settings.getSettingsFilePath());
    settings.get('url').then(url => {
      this.socket = new WebSocket(url);
      this.socket.addEventListener('open', () => {
        settings.get('token').then(token => {
          this.sendCommand('auth', token);
          this.sendCommand('accountHistory');
        });
      });
      this.socket.addEventListener('message', m => {
        const event = JSON.parse(m.data);
        const action = mapping[event.Event];
        if (action) {
          store.dispatch(action(event));
        } else {
          store.dispatch(createShodanEvent(event));
        }
      });
    });
  }
  sendCommand(command, note) {
    this.socket.send(JSON.stringify({
      Event: command,
      Note: note,
    }));
  }
}

export default Datastream;
