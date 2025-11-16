import React from "react";
import { Snowflake, Star, Gift, Sparkles, Lock } from 'lucide-react';

const icons = [Snowflake, Star, Gift, Sparkles];

export function CalendarCard({ day, isOpened, isAvailable, onClick }) {
  const Icon = icons[day % icons.length];

  return (
    <button
      onClick={onClick}
      className={`calendar-card group ${isOpened ? 'opened' : ''} ${!isAvailable ? 'locked' : ''}`}
      aria-label={`${isAvailable ? 'Open' : 'Locked'} day ${day}`}
      disabled={!isAvailable}
    >
      <div className="card-inner">
        <div className="card-front">
          {!isAvailable ? (
            <>
              <Lock className="card-icon" size={32} />
              <span className="card-number">{day}</span>
            </>
          ) : (
            <>
              <Icon className="card-icon" size={32} />
              <span className="card-number">{day}</span>
            </>
          )}
        </div>
        <div className="card-back">
          <Sparkles className="card-icon sparkle" size={32} />
          <span className="card-day-text">Day {day}</span>
        </div>
      </div>
    </button>
  );
}

