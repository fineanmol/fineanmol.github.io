import React from 'react';
import './Loading.css';

const Loading = ({
  size = 'medium',
  variant = 'spinner',
  text = 'Loading...',
  isDark = false,
  fullScreen = false,
  ariaLabel
}) => {
  const containerClasses = `
    loading-container
    ${fullScreen ? 'loading-fullscreen' : ''}
    ${isDark ? 'dark-mode' : ''}
    loading-${size}
  `.trim();

  const renderSpinner = () => (
    <div 
      className={`loading-spinner loading-${size}`}
      role="status"
      aria-label={ariaLabel || text}
    >
      <div className="spinner"></div>
    </div>
  );

  const renderDots = () => (
    <div 
      className={`loading-dots loading-${size}`}
      role="status"
      aria-label={ariaLabel || text}
    >
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );

  const renderSkeleton = () => (
    <div 
      className={`loading-skeleton loading-${size}`}
      role="status"
      aria-label={ariaLabel || text}
    >
      <div className="skeleton-line skeleton-title"></div>
      <div className="skeleton-line skeleton-text"></div>
      <div className="skeleton-line skeleton-text"></div>
      <div className="skeleton-line skeleton-text short"></div>
    </div>
  );

  const renderLoadingIndicator = () => {
    switch (variant) {
      case 'dots':
        return renderDots();
      case 'skeleton':
        return renderSkeleton();
      case 'spinner':
      default:
        return renderSpinner();
    }
  };

  return (
    <div className={containerClasses}>
      {renderLoadingIndicator()}
      {text && variant !== 'skeleton' && (
        <p 
          className="loading-text"
          aria-live="polite"
        >
          {text}
        </p>
      )}
      {/* Screen reader announcement */}
      <span className="sr-only" aria-live="assertive">
        {ariaLabel || text}
      </span>
    </div>
  );
};

export default Loading; 