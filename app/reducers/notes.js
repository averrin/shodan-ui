import { NOTES } from '../actions/shodan';

const initState = [];

export default function accountHistory(state = initState, action) {
  switch (action.type) {
    case NOTES:
      return action.payload.Payload;
    default:
      return state;
  }
}
