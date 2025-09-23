
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../components/LoadingSpinner';

const Services = dynamic(() => import('../../Services'), {
  loading: () => <LoadingSpinner />,
});

export default function ServicesPage() {
  return (

      <Services />

  );
}