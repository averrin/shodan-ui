import React, { Component, PropTypes } from 'react';
import styles from './Home.css';

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

export default class WeatherItem extends Component {
  static propTypes = {
    weather: PropTypes.object,
    ok: PropTypes.bool,
  }

  render() {
    const w = this.props.weather;
    const wi = weatherIcons[w.icon];
    const className = this.props.ok ? styles.good : styles.bad;
    return (
      <p className={`${styles.place} ${className}`} title={w.observation_location.city}>
        <i className={`wi wi-${wi}`} style={{ marginRight: 10 }} />
        <b>{w.weather} — {w.feelslike_c}°</b>
      </p>
    );
  }
}
