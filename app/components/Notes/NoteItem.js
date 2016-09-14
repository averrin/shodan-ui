
import React, { Component, PropTypes } from 'react';
import { emojify } from 'react-emojione';
import { ListItem } from 'material-ui/List';
import moment from 'moment';
// import Linkify from 'react-linkify';
// import IconButton from 'material-ui/IconButton';
import styles from './Notes.css';

const options = {
  convertShortnames: true,
  convertUnicode: true,
  convertAscii: true,
  // styles: {
  //     backgroundImage: 'url(emojione.sprites.png)',
  //     width: '32px',
  //     height: '32px',
  //     margin: '4px'
  // },
};

export default class NoteItem extends Component {
  static propTypes = {
    note: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
  }

  render() {
    const n = this.props.note;
    // n.Text = emojify(n.Text, options);
    const t = moment(n.Timestamp);
    const timestamp = !this.state.hovered ?
      <div title={t.format('DD.MM HH:mm')}>{t.fromNow()}</div> :
      <div title={t.fromNow()}>{t.format('DD.MM HH:mm')}</div>;
    return (<ListItem
      primaryText={n.Text}
      secondaryText={timestamp}
      onMouseEnter={() => this.setState({ hovered: true })}
      onMouseLeave={() => this.setState({ hovered: false })}
    />);
  }
}
