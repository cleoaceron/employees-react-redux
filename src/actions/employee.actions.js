import { employeeConstants } from "../constants";
import { employeeService } from "../services";
import { alertActions } from "../actions";
import { history } from "../helpers";

const getAllEmployees = () => {
  return (dispatch) => {
    dispatch(request());

    employeeService.getAllEmployees().then(
      (employees) => dispatch(success(employees)),
      (error) => dispatch(failure(error))
    );
  };

  function request() {
    return { type: employeeConstants.GET_EMPLOYEES_REQUEST };
  }
  function success(employees) {
    return { type: employeeConstants.GET_EMPLOYEES_SUCCESS, employees };
  }
  function failure(error) {
    return { type: employeeConstants.GET_EMPLOYEES_FAILURE, error };
  }
};

const viewEmployee = (id) => {
  return (dispatch) => {
    dispatch(request());

    employeeService.viewEmployee(id).then(
      (employee) => dispatch(success(employee)),
      (error) => dispatch(failure(error))
    );
  };

  function request() {
    return { type: employeeConstants.GET_EMPLOYEE_REQUEST };
  }
  function success(employee) {
    return { type: employeeConstants.GET_EMPLOYEE_SUCCESS, employee };
  }
  function failure(error) {
    return { type: employeeConstants.GET_EMPLOYEE_FAILURE, error };
  }
};

const addEmployee = (employee) => {
  return (dispatch) => {
    employeeService.addEmployee(employee).then(
      (employee) => {
        window.location.reload(true);
        dispatch(alertActions.success("New record successfully added."));
      },
      (error) => {
        dispatch(alertActions.error(error));
      }
    );
  };
};

const updateEmployee = (employee, uuid) => {
  return (dispatch) => {
    employeeService.updateEmployee(employee, uuid).then(
      (employee) => {
        window.location.reload(true);
        dispatch(alertActions.success("Record successfully updated."));
      },
      (error) => {
        dispatch(alertActions.error(error));
      }
    );
  };
};

const clearEmployee = () => {
  return { type: employeeConstants.GET_EMPLOYEE_REQUEST };
};

export const employeeActions = {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  viewEmployee,
  clearEmployee,
};
