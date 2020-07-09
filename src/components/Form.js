import React, { useState } from "react";
import { employeeActions } from "../actions";
import { useDispatch } from "react-redux";

const Form = ({ employee, saveFlag }) => {
  const dispatch = useDispatch();
  const [state, setEmployee] = useState(employee);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted({ submitted: true });
    const {
      first_name,
      last_name,
      middle_name,
      nick_name,
      department,
      position,
      birth_date,
      hired_date,
      email_address,
      status,
      uuid,
    } = state;

    if (
      first_name !== "" &&
      last_name !== "" &&
      middle_name !== "" &&
      nick_name !== "" &&
      department !== "" &&
      position !== "" &&
      birth_date !== "" &&
      hired_date !== "" &&
      email_address !== ""
    ) {
      if (saveFlag === "add") {
        dispatch(employeeActions.addEmployee(state));
      } else {
        dispatch(employeeActions.updateEmployee(state, uuid));
      }
    }
  };
  const {
    first_name,
    last_name,
    middle_name,
    nick_name,
    department,
    position,
    birth_date,
    hired_date,
    email_address,
    status,
  } = state;
  return (
    <div className="form-container">
      <form name="form" onSubmit={handleSubmit} action="" autoComplete="off">
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            className="form-control"
            onChange={handleChange}
            value={first_name}
          />
          {submitted && first_name === "" && (
            <div
              id="first_name-error"
              className="error invalid-feedback"
              style={{ display: "inline" }}
            >
              This field is required.
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="middle_name">Middle Name</label>
          <input
            type="text"
            name="middle_name"
            className="form-control"
            onChange={handleChange}
            value={middle_name}
          />
          {submitted && middle_name === "" && (
            <div
              id="middle_name-error"
              className="error invalid-feedback"
              style={{ display: "inline" }}
            >
              This field is required.
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            className="form-control"
            onChange={handleChange}
            value={last_name}
          />
          {submitted && last_name === "" && (
            <div
              id="last_name-error"
              className="error invalid-feedback"
              style={{ display: "inline" }}
            >
              This field is required.
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="nick_name">Nick Name</label>
          <input
            type="text"
            name="nick_name"
            className="form-control"
            onChange={handleChange}
            value={nick_name}
          />
          {submitted && nick_name === "" && (
            <div
              id="nick_name-error"
              className="error invalid-feedback"
              style={{ display: "inline" }}
            >
              This field is required.
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            name="department"
            className="form-control"
            onChange={handleChange}
            value={department}
          />
          {submitted && department === "" && (
            <div
              id="department-error"
              className="error invalid-feedback"
              style={{ display: "inline" }}
            >
              This field is required.
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            className="form-control"
            onChange={handleChange}
            value={position}
          />
          {submitted && position === "" && (
            <div
              id="position-error"
              className="error invalid-feedback"
              style={{ display: "inline" }}
            >
              This field is required.
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="birth_date">Birth Date</label>
          <input
            type="text"
            name="birth_date"
            className="form-control"
            onChange={handleChange}
            value={birth_date}
          />
          {submitted && birth_date === "" && (
            <div
              id="birth_date-error"
              className="error invalid-feedback"
              style={{ display: "inline" }}
            >
              This field is required.
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="hired_date">Hired Date</label>
          <input
            type="text"
            name="hired_date"
            className="form-control"
            onChange={handleChange}
            value={hired_date}
          />
          {submitted && hired_date === "" && (
            <div
              id="hired_date-error"
              className="error invalid-feedback"
              style={{ display: "inline" }}
            >
              This field is required.
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email_address">Email Address</label>
          <input
            type="text"
            name="email_address"
            className="form-control"
            onChange={handleChange}
            value={email_address}
          />
          {submitted && email_address === "" && (
            <div
              id="email_address-error"
              className="error invalid-feedback"
              style={{ display: "inline" }}
            >
              This field is required.
            </div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            className="form-control"
            onChange={handleChange}
            defaultValue={status}
          >
            <option value="1">Active</option>
            <option value="0">Resigned</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
