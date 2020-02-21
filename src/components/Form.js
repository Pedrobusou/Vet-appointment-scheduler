import React, {Fragment} from 'react';

const Form = ({}) => (
  <Fragment>
    <h2>Create appointment</h2>

    <form action="">
      <label>Pet name</label>
      <input
        type="text"
        name="pet-name"
        className="u-full-width"
        placeholder="Pet name"
      />

      <label>Owner name</label>
      <input
        type="text"
        name="owner-name"
        className="u-full-width"
        placeholder="Owner name"
      />

      <label>Date</label>
      <input type="date" name="date" className="u-full-width" />

      <label>Time</label>
      <input type="time" name="time" className="u-full-width" />

      <label>Symptoms</label>
      <textarea name="symptoms" className="u-full-width"></textarea>

      <button className="u-full-width button-primary">Save</button>
    </form>
  </Fragment>
);

export default Form;
