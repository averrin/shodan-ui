import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import Subheader from 'material-ui/Subheader';
import Work from 'material-ui/svg-icons/places/business-center';
import HomeIcon from 'material-ui/svg-icons/action/home';
import Nowhere from 'material-ui/svg-icons/maps/directions-car';
import Divider from 'material-ui/Divider';

import styles from './Home.css';

const icons = {
  work: <Work className={styles.icon} />,
  home: <HomeIcon className={styles.icon} />,
  nowhere: <Nowhere className={styles.icon} />,
  village: <Nowhere className={styles.icon} />,
  pavel: <Nowhere className={styles.icon} />,
};

/* eslint-disable */
const weatherIcons = {
  partlycloudy:   'day-cloudy',
  cloudy:         'cloudy',
  rain:           'rain',
  clear:          'day-sunny',
  chanceflurries: 'snow-wind',
  chancerain:     'sprinkle',
  chancesleet:    'day-sleet',
  chancesnow:     'day-snow-wind',
  chancetstorms:  'day-thunderstorm',
  flurries:       'snow-wind',
  fog:            'fog',
  hazy:           'day-haze',
  mostlycloudy:   'cloudy',
  mostlysunny:    'day-sunny',
  partlysunny:    'day-cloudy',
  sleet:          'sleet',
  snow:           'sno',
  sunny:          'day-sunny',
  tstorms:        'storm-showers',
  none:           'na',
};
/* eslint-enable */

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
    const ht = moment(this.props.status.Attendance.Value.Exit)
      .format('HH:mm');
    const toht = moment.duration(this.props.status.Attendance.Value.Since / 1000 / 1000)
      .humanize();
    const iht = moment(this.props.status.Attendance.Value.ExitIdeal)
      .format('HH:mm');
    const toiht = moment.duration(this.props.status.Attendance.Value.SinceIdeal / 1000 / 1000)
      .humanize();
    const ifn = moment(this.props.status.Attendance.Value.IfNow).format('HH:mm');
    const avg = moment(this.props.status.Attendance.Value.CurrentAverage).format('HH:mm');
    const w = this.props.status.Weather.Value;
    const wi = weatherIcons[w.icon];
    return (
      <div>
        <Subheader>Home</Subheader>
        <p className={styles.place}>You are at: {icons[this.props.status.Place.Name]}
          <br />
          Battery status:
          <span className={bStatus}> {bs}</span>
        </p>
        <Divider />
        <p className={styles.place}>
          Weather: <i className={`wi wi-${wi}`} style={{ marginRight: 10 }}/>
          <b>{w.weather} — {w.feelslike_c}°</b>
        </p>
        <Divider />
        <p className={`${styles.place} ${attendanceClass}`}>
          Home time: <b>{ht}</b> (<b>{toht}</b>)
          <br />
          Ideal home time: <b>{iht}</b> (<b>{toiht}</b>)
          <br />
          Avarage: <b>{avg}</b>
          <br />
          Avarage right meow: <b>{ifn}</b>
        </p>
      </div>
    );
  }
}
