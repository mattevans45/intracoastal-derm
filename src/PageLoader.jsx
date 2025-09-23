import React from 'react';
import LoadingSpinner from './components/LoadingSpinner';

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner />
  </div>
);

export default PageLoader;