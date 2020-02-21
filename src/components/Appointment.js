import React from 'react';

const Appointment = ({
  appointment: {petName},
  appointment: {ownerName},
  appointment: {date},
  appointment: {time},
  appointment: {symptoms}
}) => (
  <div className="appointment">
    <p>
      Pet name: <span>{petName}</span>
    </p>
    <p>
      Owner name: <span>{ownerName}</span>
    </p>
    <p>
      Date:{' '}
      <span>
        {date} {time}
      </span>
    </p>
    <p>
      Symptoms: <span>{symptoms}</span>
    </p>
  </div>
);
export default Appointment;
