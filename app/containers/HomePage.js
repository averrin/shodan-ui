import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RefreshIndicator from 'material-ui/RefreshIndicator';
import Home from '../components/Home';

const style = {
  refresh: {
    position: 'relative',
    marginLeft: '25%',
    marginTop: '50%',
  }
};

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

  render() {
    if (!this.props.status.Place) {
      return (
        <RefreshIndicator
          size={50}
          left={70}
          top={0}
          loadingColor={"#FF9800"}
          status="loading"
          style={style.refresh}
        />
      );
    }
    return (
      <div>
        <HomeContainer />
      </div>
    );
  }
}

export default connect(homeProps, mapDispatchToProps)(HomePage);
