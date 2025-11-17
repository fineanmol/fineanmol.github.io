import React, { useState, useCallback } from 'react';
import { CalendarCard } from './CalendarCard';
import { Modal } from './Modal';
import { SnowEffect } from '../../components/SnowEffect/SnowEffect';
import { calendarContent } from './calendarContent';
import { useLocalStorage } from './useLocalStorage';
import Header from '../../components/header/Header';
import { StyleProvider } from '../../contexts/StyleContext';
import './AdventCalendar.css';

function AdventCalendar() {
  const [openedCards, setOpenedCards] = useLocalStorage('css-advent-opened', []);
  const [selectedDay, setSelectedDay] = useState(null);
  const [isDark, setIsDark] = useState(false); // Advent calendar uses light mode header

  const changeTheme = useCallback(() => {
    setIsDark(prevIsDark => !prevIsDark);
  }, []);

  const contextValue = useCallback(() => ({
    isDark,
    changeTheme
  }), [isDark, changeTheme]);

  // Get current day of the month (works for any month)
  const getCurrentDay = () => {
    const now = new Date();
    const day = now.getDate(); // 1-31
    
    // Returns the current day of any month
    // If today is the 5th, days 1-5 are unlocked
    // For testing/development, you can unlock all days by uncommenting the line below
    // return 24; // Uncomment this to unlock all days for testing
    
    return day;
  };

  const currentDay = getCurrentDay();

  const isDayAvailable = (day) => {
    return day <= currentDay;
  };

  const handleCardClick = (day) => {
    if (!isDayAvailable(day)) {
      return; // Don't open if day is not available yet
    }
    
    if (!openedCards.includes(day)) {
      setOpenedCards([...openedCards, day]);
    }
    setSelectedDay(day);
  };

  const handleCloseModal = () => {
    setSelectedDay(null);
  };

  const selectedContent = selectedDay
    ? calendarContent.find((c) => c.day === selectedDay)
    : null;

  return (
    <StyleProvider value={contextValue()}>
      <Header />
      <div className="app-container">
        <SnowEffect />

        <div className="content-wrapper">
        <header className="hero">
          <h1 className="hero-title">
            <span className="hero-emoji">🎄</span>
            CSS Advent Calendar
            <span className="hero-emoji">✨</span>
          </h1>
          <p className="hero-subtitle">
            24 Days of Delightful CSS Magic
          </p>
          <div className="hero-stats">
            <span className="stat">
              {openedCards.length} / {currentDay > 0 ? currentDay : 24} Days Unlocked
            </span>
            {currentDay <= 24 && (
              <span className="stat" style={{ marginLeft: '1rem' }}>
                📅 Day {currentDay} Available
              </span>
            )}
            {currentDay > 24 && (
              <span className="stat" style={{ marginLeft: '1rem' }}>
                🎉 All Days Unlocked!
              </span>
            )}
          </div>
        </header>

        <main className="calendar-grid">
          {calendarContent.map((content) => (
            <CalendarCard
              key={content.day}
              day={content.day}
              isOpened={openedCards.includes(content.day)}
              isAvailable={isDayAvailable(content.day)}
              onClick={() => handleCardClick(content.day)}
            />
          ))}
        </main>
      </div>

        {selectedContent && (
          <Modal content={selectedContent} onClose={handleCloseModal} />
        )}
      </div>
    </StyleProvider>
  );
}

export default AdventCalendar;

