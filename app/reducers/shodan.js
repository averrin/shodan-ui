import { ONLINE_SHODAN } from '../actions/shodan';

const initState = {
  online: false,
  lastSeen: null
};

export default function shodan(state = initState, action) {
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
