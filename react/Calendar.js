import React, { useState } from 'react';
import './Calendar.css';

const Calendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [newEvent, setNewEvent] = useState('');

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const handleDateClick = (day) => {
    const dateStr = formatDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    setSelectedDate(dateStr);
    setNewEvent(events[dateStr] || '');
  };

  const handleAddEvent = () => {
    if (newEvent.trim() === '') return;
    setEvents({ ...events, [selectedDate]: newEvent });
  };

  const handleRemoveEvent = () => {
    const updated = { ...events };
    delete updated[selectedDate];
    setEvents(updated);
    setNewEvent('');
  };

  const formatDate = (date) => {
    return date.toISOString().split('T')[0]; // YYYY-MM-DD
  };

  const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const startDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty" />);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const dateStr = formatDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
    calendarDays.push(
      <div
        key={i}
        className={`calendar-day ${events[dateStr] ? 'has-event' : ''} ${
          dateStr === formatDate(today) ? 'today' : ''
        }`}
        onClick={() => handleDateClick(i)}
      >
        {i}
      </div>
    );
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>

      <div className="calendar-grid">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d} className="calendar-day header">{d}</div>
        ))}
        {calendarDays}
      </div>

      {selectedDate && (
        <div className="event-box">
          <h3>Event on {selectedDate}</h3>
          <input
            type="text"
            value={newEvent}
            onChange={(e) => setNewEvent(e.target.value)}
            placeholder="Enter event"
          />
          <button onClick={handleAddEvent}>Add / Update</button>
          <button onClick={handleRemoveEvent}>Remove</button>
        </div>
      )}
    </div>
  );
};

export default Calendar;
