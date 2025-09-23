import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../components/LoadingSpinner';

const ServicesPage = dynamic(() => import('../../../ServicesPage'), {
  loading: () => <LoadingSpinner />,
});

export default function SurgicalPage({params, children}) {
  return (
    <ServicesPage category="surgical" params={params}>
      {children}
    </ServicesPage>
  );
}