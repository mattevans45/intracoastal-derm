const LoadingSpinner = () => {
  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-100"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-16 w-16 animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
