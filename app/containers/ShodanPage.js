import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Status from '../components/Status';
import Events from '../components/Events';
import * as Actions from '../actions/shodan';

function mapStateToProps(state) {
  return {
    name: 'Shodan',
    component: state.shodanStatus
  };
}

function mapStateToPropsEvents(state) {
  return {
    events: state.shodanEvents
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

const StatusContainer = connect(mapStateToProps, mapDispatchToProps)(Status);
const EventsContainer = connect(mapStateToPropsEvents, mapDispatchToProps)(Events);
export default class ShodanPage extends Component {
  render() {
    return (
      <div>
        <StatusContainer />
        <EventsContainer />
      </div>
    );
  }
}
