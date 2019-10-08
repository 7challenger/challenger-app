import React from 'react';

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

class DateTimeWidgetProvider extends React.Component {
  constructor(props) {
    super(props);

    const dateTime = this.getNewDateTime();
    this.state = dateTime;
  }

  getNewDateTime = () => {
    const dateTime = new Date();
    const hours = this.formatDateTime(dateTime.getHours());
    const minutes = this.formatDateTime(dateTime.getMinutes());

    const time = `${hours}:${minutes}`;
    const date = this.formatDateTime(dateTime.getDate());

    return {
      time,
      date,
      weekDay: weekDays[dateTime.getDay()],
      month: months[dateTime.getMonth()],
      year: dateTime.getFullYear(),
    };
  }

  formatDateTime = (dateTime) => {
    let innerDateTime = dateTime;

    if (innerDateTime < 10) {
      innerDateTime = `0${innerDateTime}`;
    }

    return innerDateTime;
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const dateTime = this.getNewDateTime();

      this.setState(dateTime);
    }, 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { time, date, year, month, weekDay } = this.state;

    return this.props.children({ time, date, month, year, weekDay });
  }
}

export default DateTimeWidgetProvider;
