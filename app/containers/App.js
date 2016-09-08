import React, { Component, PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import GroupWork from 'material-ui/svg-icons/action/group-work';
import Home from 'material-ui/svg-icons/action/home';
import Wallet from 'material-ui/svg-icons/action/account-balance-wallet';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router';

import styles from './App.css';

const iconStyle = {
  width: 48,
  height: 48,
  color: '#555'
};
const style = {
  padding: 0,
  paddingTop: 15
};

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string
    })
  };

  static menu = [
    { url: '/', icon: <Home /> },
    { url: '/shodan', icon: <GroupWork /> },
    { url: '/money', icon: <Wallet /> },
  ];

  render() {
    const items = App.menu.map((e, i) => (
      <Link to={e.url} key={i}>
        <MenuItem className={this.props.location.pathname === e.url ? styles.active : ''}>
          <IconButton iconStyle={iconStyle} style={style} disableTouchRipple>
            {e.icon}
          </IconButton>
        </MenuItem>
      </Link>
    ));
    return (
      <div>
        <Drawer open containerClassName={styles.drawer}>
          {items}
        </Drawer>
        <div className={styles.wrapper}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
