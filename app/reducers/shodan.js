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
      return action.payload.Payload;
    default:
      return state;
  }
}

export function shodanEvents(state = [], action) {
  const ns = state.slice();
  const last = ns[ns.length - 1];
  switch (action.type) {
    case EVENT_SHODAN:
      if (action.payload.Event === 'leave' &&
        action.payload.Note === 'nowhere'
      ) {
        return ns;
      }
      if (last &&
        last.Event === action.payload.Event &&
        last.Note === action.payload.Note) {
        if (last.count) {
          last.count++;
        } else {
          last.count = 2;
        }
        last.Timestamp = action.payload.Timestamp;
      } else if (last &&
        last.Event === 'say' &&
        action.payload.Event === 'sayDirect' &&
        !Array.isArray(last.Note)
      ) {
        last.Note = [last.Note, action.payload.Note];
      } else if (last &&
        last.Event === action.payload.Event &&
        action.payload.Note === 'off' &&
        last.Note === 'on') {
        last.Note = 'on/off';
        last.Timestamp = action.payload.Timestamp;
      } else if (last &&
        last.Event === action.payload.Event &&
        action.payload.Note === 'unidle' &&
        last.Note === 'idle') {
        last.Note = 'on/off';
        last.Timestamp = action.payload.Timestamp;
      } else {
        ns.push(action.payload);
      }
      return ns;
    default:
      return state;
  }
}
