import { employeeConstants } from "../constants";

const initialState = {
  loading: false,
  error: false,
  message: "",
  search: false,
  items: [],
};

export function employees(state = initialState, action) {
  switch (action.type) {
    case employeeConstants.GET_EMPLOYEES_REQUEST:
      return {
        loading: true,
        error: false,
        search: false,
        message: "",
        items: [],
      };
    case employeeConstants.GET_EMPLOYEES_SUCCESS:
      return {
        loading: false,
        error: false,
        search: false,
        message: "Successfully Fetched Team Employees!",
        items: action.employees,
      };
    case employeeConstants.GET_EMPLOYEES_FAILURE:
      return {
        loading: false,
        error: action.error,
        search: false,
        message: "",
        items: [],
      };
    default:
      return state;
  }
}
