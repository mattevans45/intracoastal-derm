
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../components/LoadingSpinner';

const About = dynamic(() => import('../../About'), {
  loading: () => <LoadingSpinner />,
});

export default function AboutPage() {
  return (

      <About />

  );
}