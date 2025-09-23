import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../components/LoadingSpinner';

const ServicesPage = dynamic(() => import('../../../ServicesPage'), {
  loading: () => <LoadingSpinner />,
});

export default function CosmeticPage({params, children}) {
  return (
    <ServicesPage category="cosmetic" params={params}>
      {children}
    </ServicesPage>
  );
}