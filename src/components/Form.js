import React, {Fragment, useState} from 'react';

const Form = ({}) => {
  const [appointment, setAppointment] = useState({
    petName: '',
    ownerName: '',
    date: '',
    time: '',
    symptoms: ''
  });

  const {petName, ownerName, date, time, symptoms} = appointment;

  const handleChange = event => {
    setAppointment({...appointment, [event.target.name]: event.target.value});
  };

  const submit = event => {
    event.preventDefault();
    alert('submit');

    //TODO: validate fields

    //TODO: assing ID

    //TODO: create appointment

    //TODO: reset form
  };

  return (
    <Fragment>
      <h2>Create appointment</h2>

      <form onSubmit={submit}>
        <label>Pet name</label>
        <input
          type="text"
          name="petName"
          className="u-full-width"
          placeholder="Pet name"
          onChange={handleChange}
          value={petName}
        />

        <label>Owner name</label>
        <input
          type="text"
          name="ownerName"
          className="u-full-width"
          placeholder="Owner name"
          onChange={handleChange}
          value={ownerName}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
          value={time}
        />

        <label>Symptoms</label>
        <textarea
          name="symptoms"
          className="u-full-width"
          onChange={handleChange}
          value={symptoms}
        ></textarea>

        <button className="u-full-width button-primary">Save</button>
      </form>
    </Fragment>
  );
};
export default Form;
