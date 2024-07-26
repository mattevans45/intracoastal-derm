import { Suspense } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import App from '../App';


export default function HomePage() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
        <App />
    </Suspense>
  );
}