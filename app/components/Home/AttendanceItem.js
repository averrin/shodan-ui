import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import styles from './Home.css';

export default class AttendanceItem extends Component {
  static propTypes = {
    attendance: PropTypes.object.isRequired,
    attendanceClass: PropTypes.string
  }

  render() {
    const attendance = this.props.attendance;
    const attendanceClass = this.props.attendanceClass;
    const ht = moment(attendance.Exit)
      .format('HH:mm');
    const toht = attendance.Since > 0 ? moment.duration(attendance.Since / 1000 / 1000)
      .humanize() : <span className={styles.normal}>RIGHT MEOW!</span>;
    const iht = moment(attendance.ExitIdeal)
      .format('HH:mm');
    const toiht = attendance.SinceIdeal > 0 ? moment.duration(attendance.SinceIdeal / 1000 / 1000)
      .humanize() : <span className={styles.normal}>RIGHT MEOW!</span>;
    const ifn = moment(attendance.IfNow).format('HH:mm');
    const avg = moment(attendance.CurrentAverage).format('HH:mm');
    return (
      <p className={`${styles.place} ${attendanceClass}`}>
        Home time: <b>{ht}</b> (<b>{toht}</b>)
        <br />
        Ideal home time: <b>{iht}</b> (<b>{toiht}</b>)
        <br />
        Avarage: <b>{avg}</b>
        <br />
        Avarage right meow: <b>{ifn}</b>
      </p>
    );
  }
}
