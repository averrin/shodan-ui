import { ONLINE_SHODAN, EVENT_SHODAN } from '../actions/shodan';

const initState = {
  online: false,
  lastSeen: null
};

export function shodanStatus(state = initState, action) {
  switch (action.type) {
    case ONLINE_SHODAN:
      if (action.payload && action.payload.Note === 'true') {
        return { ...state, online: true, lastSeen: action.payload.Timestamp };
      }
      return { ...state, online: false };
    default:
      return state;
  }
}

export function shodanEvents(state = [], action) {
  const ns = state.slice();
  switch (action.type) {
    case EVENT_SHODAN:
      ns.push(action.payload);
      return ns;
    default:
      return state;
  }
}
