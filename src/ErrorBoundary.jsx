import React from 'react';
import { Navigate } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // Implement redirect to previous page
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}

const ErrorFallback = () => {
  const handleBack = () => {
    return <Navigate to={-1} replace={true} />; // Use Navigate for redirection
  };

  return (
    <div>
      <h1>Something went wrong.</h1>
      <p>An error occurred. Please try refreshing the page or go back to the previous page.</p>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
};

export default ErrorBoundary;
