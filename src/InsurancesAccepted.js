import { InsurancesContent } from './InsurancesContent';

const InsurancesAccepted = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-4xl container p-6 text-[#4d4d4d] bg-slate-100 rounded-lg">
        <InsurancesContent />
      </div>
    </div>
  );
};

export default InsurancesAccepted;