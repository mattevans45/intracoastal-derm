'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

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
      return <ErrorFallback error={this.state.error} errorInfo={this.state.errorInfo} />;
    }

    return this.props.children;
  }
}

const ErrorFallback = ({ error, errorInfo }) => {
 const router = useRouter();

  const handleBack = () => {
    router.push('/'); 
  
    
  };

  return (
    <div className="text-center p-12 font-sans">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops! Something went wrong.</h1>
      <p className="text-xl text-gray-600 mb-8">
        An error occurred. Please try refreshing the page or go back to the previous page.
      </p>
      <div className="mb-8 text-left">
        <h2 className="text-2xl font-bold mb-2">Error Details:</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          <code>{error && error.toString()}</code>
        </pre>
        <h2 className="text-2xl font-bold mt-4 mb-2">Component Stack:</h2>
        <pre className="bg-gray-100 p-4 rounded overflow-auto">
          <code>{errorInfo && errorInfo.componentStack}</code>
        </pre>
      </div>
      <button 
        onClick={handleBack} 
        className="px-6 py-2 text-white bg-[#30548B] rounded hover:bg-blue-600 transition duration-300"
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorBoundary;