import React, { Component, PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';
import Work from 'material-ui/svg-icons/places/business-center';
import HomeIcon from 'material-ui/svg-icons/action/home';
import Nowhere from 'material-ui/svg-icons/maps/directions-car';
import Divider from 'material-ui/Divider';

import WeatherItem from './WeatherItem';
import AttendanceItem from './AttendanceItem';
import styles from './Home.css';

const icons = {
  work: <Work className={styles.icon} />,
  home: <HomeIcon className={styles.icon} />,
  nowhere: <Nowhere className={styles.icon} />,
  village: <Nowhere className={styles.icon} />,
  pavel: <Nowhere className={styles.icon} />,
};

export default class Home extends Component {
  static propTypes = {
    status: PropTypes.shape({
      Place: PropTypes.shape({
        Name: PropTypes.string
      }),
      Amount: PropTypes.shape({
        Value: PropTypes.string
      }),
      Battery: PropTypes.shape({
        Value: PropTypes.string
      }),
      Weather: PropTypes.shape({
        Value: PropTypes.object
      }),
      Attendance: PropTypes.shape({
        Value: PropTypes.object
      }),
      WeatherIsOk: PropTypes.shape({
        Value: PropTypes.string
      }),
    })
  }

  render() {
    const bs = this.props.status.Battery.Value;
    const bStatus = bs === 'normal' ? styles.normal : styles.low;
    const attendanceClass = this.props.status.Place.Name === 'work' ? '' : styles.hide;
    return (
      <div>
        <Subheader>Home</Subheader>
        <WeatherItem
          weather={this.props.status.Weather.Value}
          ok={this.props.status.WeatherIsOk.Value === 'true'}
        />
        <Divider />
        <p className={styles.place}>You are at: {icons[this.props.status.Place.Name]}
          <br />
          Battery status:
          <b className={bStatus}> {bs}</b>
        </p>
        <Divider />
        <AttendanceItem
          attendance={this.props.status.Attendance.Value}
          attendanceClass={attendanceClass}
        />
      </div>
    );
  }
}
