import React, { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import "./Form.css";

const Form: React.FC = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const day = new Date().getDate();
  const initialDate = `${year}-${month}-${day}`;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(initialDate);

  const handleOnSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
  };

  const handleOnChangeFieldTitle = (event: FormEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value);
  };
  const handleOnChangeFieldDescription = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.currentTarget.value);
  };
  const handleOnChangeFieldDate = (event: FormEvent<HTMLInputElement>) => {
    setDate(event.currentTarget.value);
  };

  const handleOnClickOnDateInput = (event: MouseEvent<HTMLInputElement>) => {
    event.currentTarget.addEventListener("loadeddata", null);
  };
  return (
    <>
      <form className="form_container">
        <div className="form_field">
          <label className="form_field_label" htmlFor="title">
            Title
          </label>
          <input
            value={title}
            type="text"
            name="title"
            size={20}
            maxLength={20}
            placeholder="Title"
            className="form_field_input_text"
            onChange={handleOnChangeFieldTitle}
          />
        </div>
        <div className="form_field">
          <label className="form_field_label" htmlFor="description">
            Description
          </label>
          <textarea
            onChange={handleOnChangeFieldDescription}
            value={description}
            name="description"
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
            onClick={(event: React.MouseEvent<HTMLInputElement>) =>
              handleOnClickOnDateInput(event)
            }
            onChange={handleOnChangeFieldDate}
            type="date"
            step="1"
            value={date}
            name="date"
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
