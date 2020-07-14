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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleOnSubmit}
        style={{
          backgroundColor: "#6fcdef",
          padding: "1em",
          width: "67vw",
          borderRadius: "10px",
          margin: "1em 0px",
          height: "50%",
          boxShadow: " 0px 0px 15px 3px",
          border: "3px solid #fff",
        }}
      >
        <div>
          <select
            style={{ width: "30vw", margin: "1em 0" }}
            onClick={(e) => setForm({ input: e.target.value })}
          >
            <option>Status</option>
            <option>Alive</option>
            <option>Dead</option>
          </select>
        </div>
        <input style={{ width: "20vw" }} type="submit" />
      </form>
    </div>
  );
};

export default Form;
