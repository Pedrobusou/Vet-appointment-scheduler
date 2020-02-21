import React, {Fragment, useState} from 'react';

const Form = ({}) => {
  const [appointment, setAppointment] = useState({
    petName: '',
    ownerName: '',
    date: '',
    time: '',
    symptoms: ''
  });

  const handleChange = () => {
    console.log('handleChange');
  };

  return (
    <Fragment>
      <h2>Create appointment</h2>

      <form action="">
        <label>Pet name</label>
        <input
          type="text"
          name="petName"
          className="u-full-width"
          placeholder="Pet name"
          onChange={handleChange}
        />

        <label>Owner name</label>
        <input
          type="text"
          name="ownerName"
          className="u-full-width"
          placeholder="Owner name"
          onChange={handleChange}
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
        />

        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={handleChange}
        />

        <label>Symptoms</label>
        <textarea
          name="symptoms"
          className="u-full-width"
          onChange={handleChange}
        ></textarea>

        <button className="u-full-width button-primary">Save</button>
      </form>
    </Fragment>
  );
};
export default Form;
