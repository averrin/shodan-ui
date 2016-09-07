export const ONLINE_SHODAN = 'ONLINE_SHODAN';
export const ONLINE_GIDEON = 'ONLINE_GIDEON';
export const EVENT_SHODAN = 'EVENT_SHODAN';

export function setShodanOnline(event) {
  return {
    type: ONLINE_SHODAN,
    payload: event
  };
}

export function setGideonOnline(event) {
  return {
    type: ONLINE_GIDEON,
    payload: event
  };
}

export function createShodanEvent(event) {
  return {
    type: EVENT_SHODAN,
    payload: event
  };
}
