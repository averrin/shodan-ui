import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Notes from '../components/Notes/Notes';
import Loader from '../components/Loader';

function notesProps(state) {
  return {
    notes: state.notes,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators([], dispatch);
}

const NotesContainer = connect(notesProps, mapDispatchToProps)(Notes);

class NotesPage extends Component {
  static propTypes = {
    notes: PropTypes.array,
  }

  static contextTypes = {
    datastream: PropTypes.func
  };

  render() {
    if (!this.props.notes) {
      return <Loader />;
    }
    return <NotesContainer />;
  }
}

export default connect(notesProps, mapDispatchToProps)(NotesPage);
