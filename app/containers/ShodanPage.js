import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Status from '../components/Status';
import Events from '../components/Events';
import * as Actions from '../actions/shodan';
import Subheader from 'material-ui/Subheader';

function shodanProps(state) {
  return {
    name: 'Shodan',
    component: state.shodanStatus
  };
}

function gideonProps(state) {
  return {
    name: 'Gideon',
    component: state.gideonStatus
  };
}

function eventsProps(state) {
  return {
    events: state.shodanEvents
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

const StatusContainer = connect(shodanProps, mapDispatchToProps)(Status);
const GideonStatusContainer = connect(gideonProps, mapDispatchToProps)(Status);
const EventsContainer = connect(eventsProps, mapDispatchToProps)(Events);
export default class ShodanPage extends Component {
  render() {
    return (
      <div>
        <Subheader>Status</Subheader>
        <div className="wrapper">
          <StatusContainer />
          <GideonStatusContainer />
        </div>
        <EventsContainer />
      </div>
    );
  }
}
