import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: " Please enter first and last name" });
    } else {
      console.log(firstName, lastName);
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>Add technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firsName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="">
              {" "}
              FirstName
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName"> Last name</label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          className="btn modal-close waves-effect blue"
          onClick={onSubmit}
        >
          {" "}
          Enter{" "}
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%"
};

export default AddTechModal;
