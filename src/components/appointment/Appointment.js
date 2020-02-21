import React from 'react';
import './appointment.scss';

const Appointment = ({
  appointment: {id},
  appointment: {petName},
  appointment: {ownerName},
  appointment: {date},
  appointment: {time},
  appointment: {symptoms},
  removeAppointment
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

    <button
      type="button"
      className="button delete u-full-width"
      onClick={() => removeAppointment(id)}
    >
      Remove
    </button>
  </div>
);
export default Appointment;
