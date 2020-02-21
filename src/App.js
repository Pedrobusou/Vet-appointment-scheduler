import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import Appointment from './components/appointment/Appointment';

const App = () => {
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem('appointments')) || []
  );

  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  const createAppointment = appointment => {
    setAppointments([...appointments, appointment]);
  };

  const removeAppointment = id => {
    setAppointments(appointments.filter(a => a.id !== id));
  };

  return (
    <Fragment>
      <h1>Patient manager</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>

          <div className="one-half column">
            <h2>
              {appointments.length
                ? 'Appointments'
                : 'No appointments scheduled'}
            </h2>
            {appointments.map(appointment => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                removeAppointment={removeAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
