import React from "react";
import { useInView } from 'react-intersection-observer';

const LazyLoadedComponent = ({ Component }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px 0px',
  });

  return (
    <div ref={ref}>
      {inView && <Component />}
    </div>
  );
};

export default LazyLoadedComponent;