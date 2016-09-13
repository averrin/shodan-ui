import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home/Home';
import Loader from '../components/Loader';

function homeProps(state) {
  return {
    status: state.globalStatus,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators([], dispatch);
}

const HomeContainer = connect(homeProps, mapDispatchToProps)(Home);

class HomePage extends Component {
  static propTypes = {
    status: PropTypes.object,
  }

  static contextTypes = {
    datastream: PropTypes.func
  };

  render() {
    if (!this.props.status.Place) {
      return <Loader />;
    }
    return <HomeContainer />;
  }
}

export default connect(homeProps, mapDispatchToProps)(HomePage);
