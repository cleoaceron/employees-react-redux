import { employeeConstants } from "../constants";

const initialState = {
  loading: false,
  error: false,
  message: "",
  employee: {
    first_name: "",
    last_name: "",
    middle_name: "",
    nick_name: "",
    department: "",
    position: "",
    birth_date: "",
    hired_date: "",
    email_address: "",
    status: 1,
    uuid: "",
  },
};

export function view(state = initialState, action) {
  switch (action.type) {
    case employeeConstants.GET_EMPLOYEE_REQUEST:
      return {
        loading: true,
        error: false,
        message: "",
        employee: {
          first_name: "",
          last_name: "",
          middle_name: "",
          nick_name: "",
          department: "",
          position: "",
          birth_date: "",
          hired_date: "",
          email_address: "",
          status: 1,
          uuid: "",
        },
      };
    case employeeConstants.GET_EMPLOYEE_SUCCESS:
      return {
        loading: false,
        error: false,
        message: "Successfully Fetched Team Employees!",
        employee: action.employee.model,
      };
    case employeeConstants.GET_EMPLOYEE_FAILURE:
      return {
        loading: false,
        error: action.error,
        message: "",
        employee: {
          first_name: "",
          last_name: "",
          middle_name: "",
          nick_name: "",
          department: "",
          position: "",
          birth_date: "",
          hired_date: "",
          email_address: "",
          status: 1,
          uuid: "",
        },
      };
    default:
      return state;
  }
}
