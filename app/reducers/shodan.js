import { ONLINE_SHODAN, ONLINE_GIDEON, EVENT_SHODAN, STATUS } from '../actions/shodan';

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

export function gideonStatus(state = initState, action) {
  switch (action.type) {
    case ONLINE_GIDEON:
      if (action.payload && action.payload.Note === 'true') {
        return { ...state, online: true, lastSeen: action.payload.Timestamp };
      }
      return { ...state, online: false };
    default:
      return state;
  }
}

const initStatus = {
  Place: null,
  Amount: null
};

export function globalStatus(state = initStatus, action) {
  switch (action.type) {
    case STATUS:
      return JSON.parse(action.payload.Note);
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
