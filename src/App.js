import React, {Fragment, useState} from 'react';
import Form from './components/Form';
import List from './components/List';

const App = () => {
  const [appointments, setAppointments] = useState([]);

  const createAppointment = appointment => {
    setAppointments([...appointments, appointment]);
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
            <List appointments={appointments} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
