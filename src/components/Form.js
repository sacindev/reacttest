import React, { useState } from "react";
import { getCharacthers } from "../services/getCharacthers";

const Form = ({ page }) => {
  const [form, setForm] = useState({ input: "" });
  const handleOnSubmit = (e) => {
    e.preventDefault();
    let promises = getCharacthers(page, form.input);
    promises.then((res) => console.log(res));
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <select onClick={(e) => setForm({ input: e.target.value })}>
            <option>Status</option>
            <option>Alive</option>
            <option>Dead</option>
          </select>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
