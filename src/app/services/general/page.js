// app/services/general/layout.js
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../../components/LoadingSpinner';

const ServicesPage = dynamic(() => import('../../../ServicesPage'), {
  loading: () => <LoadingSpinner />,
});

export default function GeneralLayout({ children }) {
  return (
    <>

    <ServicesPage category="general">
 
     {children}
 
    </ServicesPage>
    </>
  );
}