
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../components/LoadingSpinner';

const MedicalDisclaimer = dynamic(() => import('../../MedicalDisclaimer'), {
  loading: () => <LoadingSpinner />,
});

export default function MedicalDisclaimerPage() {
  return (
      <main>
        <MedicalDisclaimer />

      </main>

  );
}