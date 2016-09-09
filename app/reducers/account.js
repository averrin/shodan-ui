import { ACCOUNT_HISTORY } from '../actions/shodan';

const initState = [];

export default function accountHistory(state = initState, action) {
  switch (action.type) {
    case ACCOUNT_HISTORY:
      return action.payload.Payload;
    default:
      return state;
  }
}
