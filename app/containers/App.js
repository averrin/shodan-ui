import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import GroupWork from 'material-ui/svg-icons/action/group-work';
import Home from 'material-ui/svg-icons/action/home';
import Wallet from 'material-ui/svg-icons/action/account-balance-wallet';
import Notes from 'material-ui/svg-icons/action/book';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import KeyHandler, { KEYPRESS } from 'react-key-handler';
import Badge from 'material-ui/Badge';

import * as Actions from '../actions/shodan';
import styles from './App.css';
import Datastream from '../utils/datastream';
import ConfigDialog from '../components/ConfigDialog/ConfigDialog';
import Loader from '../components/Loader';

const iconStyle = {
  width: 48,
  height: 48,
  color: '#ccc'
};
const style = {
  padding: 0,
  paddingTop: 15
};


class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string
    }),
    unreadCount: PropTypes.number
  };

  static menu = [
    { url: '/', icon: <Home /> },
    { url: '/shodan', icon: <GroupWork /> },
    { url: '/money', icon: <Wallet /> },
    { url: '/notes', icon: <Notes /> },
  ];

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired
  };

  static childContextTypes = {
    datastream: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.datastream = new Datastream(this.props);
    this.datastream.ready.then(() => {
      this.setState({ connected: true });
    }, () => {
      this.setState({ connected: false });
    });
  }

  state = {
    connected: null
  };

  getChildContext() {
    return { datastream: () => this.datastream };
  }

  select(url) {
    this.context.router.push(url);
  }

  render() {
    // style.color = this.context.muiTheme.palette.secondaryTextColor;
    if (this.state.connected === false) {
      return (
        <ConfigDialog />
      );
    }
    if (this.state.connected === null) {
      return (
        <Loader />
      );
    }
    const items = App.menu.map((el, i) => {
      const is = { ...iconStyle };
      const e = { ...el };
      if (e.url === '/shodan') {
        // is.transform = 'rotate(180deg)';
        if (this.props.unreadCount > 0) {
          e.icon = (
            <Badge
              style={{
                ...style,
              }}
              badgeStyle={{
                top: 10,
                right: -5,
              }}
              badgeContent={this.props.unreadCount} primary
            ><GroupWork style={{
              ...is,
              transform: "rotate(180deg)",
            }}/>
            </Badge>
          );
        } else {
          e.icon = (
            <IconButton iconStyle={{
              ...is,
              transform: "rotate(180deg)",
            }} style={style} disableTouchRipple>
              {e.icon}
            </IconButton>
          );
        }
      } else {
        e.icon = (
          <IconButton iconStyle={is} style={style} disableTouchRipple>
            {e.icon}
          </IconButton>
        )
      }
      return (
        <Link to={e.url} key={i}>
          <KeyHandler
            keyEventName={KEYPRESS}
            keyValue={String(i + 1)}
            onKeyHandle={this.select.bind(this, e.url)}
          />
          <MenuItem className={this.props.location.pathname === e.url ? styles.active : ''}>
            {e.icon}
          </MenuItem>
        </Link>
      );
    });
    return (
      <div style={{ backgroundColor: this.context.muiTheme.palette.canvasColor }}>
        <Drawer open containerClassName={styles.drawer}>
          {items}
        </Drawer>
        <div className={styles.wrapper} id="wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(s => ({unreadCount: s.unreadCount}), d => bindActionCreators(Actions, d))(App);
