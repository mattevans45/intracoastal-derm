
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../components/LoadingSpinner';

const Location = dynamic(() => import('../../Location'), {
  loading: () => <LoadingSpinner />,
});

export default function LocationPage() {
  return (

      <Location />

  );
}