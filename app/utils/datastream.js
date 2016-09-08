import settings from 'electron-settings';
import { setShodanOnline, createShodanEvent, setGideonOnline, status } from '../actions/shodan';

class Datastream {
  constructor(store) {
    console.log(settings.getSettingsFilePath());
    settings.get('url').then(url => {
      this.socket = new WebSocket(url);
      this.socket.addEventListener('open', () => {
        settings.get('token').then(token => {
          this.sendCommand('auth', token);
        });
      });
      this.socket.addEventListener('message', m => {
        const event = JSON.parse(m.data);
        if (event.Event === 'shodanOnline') {
          store.dispatch(setShodanOnline(event));
        } else if (event.Event === 'gideonOnline') {
          store.dispatch(setGideonOnline(event));
        } else if (event.Event === 'status') {
          store.dispatch(status(event));
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
