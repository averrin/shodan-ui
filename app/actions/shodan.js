export const ONLINE_SHODAN = 'ONLINE_SHODAN';

export function setShodanOnline(event) {
  return {
    type: ONLINE_SHODAN,
    payload: event
  };
}
