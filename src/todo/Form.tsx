import React from "react";
import "./Form.css";

const Form: React.FC = () => {
  const handleOnClickOnDateInput = (event:  React.MouseEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.style);
  };
  return (
    <>
      <form className="form_container">
        <div className="form_field">
          <label className="form_field_label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            size={20}
            maxLength={20}
            placeholder="Title"
            className="form_field_input_text"
          />
        </div>
        <div className="form_field">
          <label className="form_field_label" htmlFor="description">
            Description
          </label>
          <textarea
            maxLength={250}
            rows={8}
            placeholder="Description"
            className="form_field_input_textarea"
          />
        </div>
        <div className="form_field">
          <label className="form_field_label" htmlFor="date">
            Date Limit
          </label>
          <input
            onClick = {(event: React.MouseEvent<HTMLInputElement>) => handleOnClickOnDateInput(event)}
            type="date"
            min="2021-01-01"
            max="2022-12-31"
            className="form_field_input_date"
          />
        </div>
        <div className="form_field_input_btn">
          <input type="button" value="Save" className="form_btn" />
        </div>
      </form>
    </>
  );
};

export default Form;
