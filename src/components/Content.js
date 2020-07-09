import React, { useState, useMemo } from "react";
import { employeeActions } from "../actions";
import { useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import Form from "./Form";

const Content = ({ employees, alert, view }) => {
  const dispatch = useDispatch();
  const [formTrigger, setFormTrigger] = useState(0);
  const [addOrUpdate, setAddOrUpdate] = useState("");
  let employeeList =
    employees.items.list !== undefined
      ? employees.items.list.map((employee) =>
          !employee.status
            ? {
                ...employee,
                status: "Resigned",
                name: `${employee.first_name} ${employee.middle_name} ${employee.last_name}`,
              }
            : {
                ...employee,
                status: "Active",
                name: `${employee.first_name} ${employee.middle_name} ${employee.last_name}`,
              }
        )
      : [];
  const editEmployee = (id) => {
    dispatch(employeeActions.viewEmployee(id));
    setTimeout(function () {
      setFormTrigger(!formTrigger ? true : false);
      setAddOrUpdate({ addOrUpdate: "edit" });
    }, 800);
  };
  const addEmployee = () => {
    dispatch(employeeActions.clearEmployee());
    setFormTrigger(!formTrigger ? true : false);
    setAddOrUpdate({ addOrUpdate: "add" });
  };

  const columns = useMemo(() => [
    {
      name: "Full Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Nick Name",
      selector: "nick_name",
      sortable: true,
      right: true,
    },
    {
      name: "Department",
      selector: "department",
      sortable: true,
      right: true,
    },
    {
      name: "Position",
      selector: "position",
      sortable: true,
      right: true,
    },
    {
      name: "Birth Date",
      selector: "birth_date",
      sortable: true,
      right: true,
    },
    {
      name: "Hired Date",
      selector: "hired_date",
      sortable: true,
      right: true,
    },
    {
      name: "Email Address",
      selector: "email_address",
      sortable: true,
      right: true,
    },
    {
      name: "Status",
      selector: "status",
      sortable: true,
      right: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <button
          className="btn btn-success"
          onClick={() => editEmployee(row.uuid)}
        >
          Edit
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ]);

  return (
    <div>
      {alert.message && (
        <div className={`alert ${alert.type}`} role="alert">
          <div className="alert-text">{alert.message}</div>
          <div className="alert-close">
            <i className="flaticon2-cross kt-icon-sm" data-dismiss="alert"></i>
          </div>
        </div>
      )}
      <div style={{ textAlign: "right", margin: "25px 0px 15px 0px" }}>
        <button className="btn btn-success" onClick={() => addEmployee()}>
          {!formTrigger ? "Add New Employee" : "Back"}
        </button>
      </div>
      {!formTrigger && (
        <DataTable
          title="Employees"
          columns={columns}
          data={employeeList}
          pagination={true}
        />
      )}
      {formTrigger && <Form employee={view.employee} saveFlag={addOrUpdate} />}
    </div>
  );
};

export default Content;
