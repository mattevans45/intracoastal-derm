import React from 'react';
import LoadingSpinner from './LoadingSpinner';

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <LoadingSpinner />
  </div>
);

export default PageLoader;