
import dynamic from 'next/dynamic';
import LoadingSpinner from '../../components/LoadingSpinner';

const SchduleAppointment = dynamic(() => import('../../ScheduleAppointment'), {
  loading: () => <LoadingSpinner />,
});

export default function SchduleAppointmentPage() {
  return (

      <SchduleAppointment />

  );
}