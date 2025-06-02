import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

const ErrorFallback = ({ 
  error, 
  resetErrorBoundary, 
  isDark = false 
}) => {
  const handleRetry = () => {
    // Log retry attempt
    if (window.gtag) {
      window.gtag('event', 'error_boundary_retry', {
        event_category: 'Error',
        event_label: error.message,
      });
    }
    resetErrorBoundary();
  };

  return (
    <div 
      className={`error-boundary ${isDark ? 'dark-mode' : ''}`}
      role="alert"
      aria-live="assertive"
    >
      <div className="error-content">
        <h2>Something went wrong</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>
          <summary>Error details</summary>
          {error.message}
        </details>
        <button 
          onClick={handleRetry}
          className="retry-button"
          aria-label="Retry loading this section"
        >
          Try again
        </button>
      </div>
    </div>
  );
};

const ErrorBoundary = ({
  children,
  fallback,
  isDark = false,
  onError
}) => {
  const handleError = (error, errorInfo) => {
    // Log error to analytics
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        event_category: 'Error Boundary',
      });
    }

    // Console error for development
    console.error('Error Boundary caught an error:', error, errorInfo);

    // Custom error handler
    if (onError) {
      onError(error, errorInfo);
    }
  };

  const FallbackComponent = fallback || ErrorFallback;

  return (
    <ReactErrorBoundary
      FallbackComponent={(props) => (
        <FallbackComponent {...props} isDark={isDark} />
      )}
      onError={handleError}
      onReset={() => {
        // Reset any state if needed
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary; 