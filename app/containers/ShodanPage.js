import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Status from '../components/Status';
import * as Actions from '../actions/shodan';

function mapStateToProps(state) {
  return {
    name: 'Shodan',
    component: state.shodan
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Status);
