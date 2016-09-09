import React, { Component, PropTypes } from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const style = {
  refresh: {
    position: 'relative',
    marginLeft: '25%',
    marginTop: '50%',
  }
};

export default class Loader extends Component {
  static propTypes = {
    account: PropTypes.object,
    history: PropTypes.array,
  }

  render() {
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
}
