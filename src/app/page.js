import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from '../components/LoadingSpinner';

const App = dynamic(() => import('../components/App.js'), {
  loading: () => <LoadingSpinner />,
});

export const metadata = {
  title: 'Intracoastal Dermatology and Skin Surgery: Home',
  description: 'Intracoastal Dermatology offers expert care in general, cosmetic, and surgical dermatology. New office opening in Leland, NC. Schedule your consultation today.',

};

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <App />
    </Suspense>
  );
}