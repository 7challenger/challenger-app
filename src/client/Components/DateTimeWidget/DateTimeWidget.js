import React from 'react';
import DateTimeWidgetProvider from './DateTimeWidgetProvider';

const DateTimeWidget = () => {
  return (
    <DateTimeWidgetProvider>
      {({ time, date, month, year, weekDay }) => {
        return (
          <div className="datetime-widget-wrapper">
            <div className="datetime-widget-time">
              {time}
            </div>

            <div className="datetime-widget-date-wrapper">
              <div className="datetime-widget-date-top">
                <div className="datetime-widget-date-large">
                  {date}
                </div>

                <div className="datetime-widget-date-medium">{month}</div>

                <div className="datetime-widget-date-medium">{year}</div>
              </div>

              <div className="datetime-widget-date-large">
                {weekDay}
              </div>
            </div>
          </div>
        );
      }}
    </DateTimeWidgetProvider>
  );
};

export default DateTimeWidget;
