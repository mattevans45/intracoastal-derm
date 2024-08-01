
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../components/LoadingSpinner';

const Contact = dynamic(() => import('../../Contact'), {
  loading: () => <LoadingSpinner />,
});

export default function ContactPage() {
  return (

      <Contact />

  );
}