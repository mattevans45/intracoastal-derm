import React from 'react';

const ScheduleAppointment = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200 p-6">
      <h2 className="mb-4 text-gray-700 text-center text-4xl font-bold">Appointment Form</h2>
      <h3 className="mb-8 text-gray-600 text-center text-xl font-medium">
        Submit the form below to schedule an appointment with Dr. Harris.
      </h3>
      <div className="w-full max-w-4xl p-1 bg-white rounded-lg shadow-lg">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScUZCOgPHXlIyHcbbIIInU8Ud6PeUqt_3h-pxqk2_LTXihmtA/viewform?embedded=true"
          className="w-full h-[100vh] rounded-lg"
   
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default ScheduleAppointment;
