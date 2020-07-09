import { authHeader, apiUrl } from "../helpers";

const getAllEmployees = async () => {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
  };

  return await fetch(`${apiUrl}/employees/list/`, requestOptions).then(
    handleResponse
  );
};

const viewEmployee = async (id) => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return await fetch(`${apiUrl}/employees/view/${id}`, requestOptions).then(
    handleResponse
  );
};

const addEmployee = (employee) => {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(employee),
  };

  return fetch(`${apiUrl}/employees/add`, requestOptions).then(handleResponse);
};

const updateEmployee = (employee, uuid) => {
  const requestOptions = {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify(employee),
  };

  return fetch(`${apiUrl}/employees/update/${uuid}`, requestOptions).then(
    handleResponse
  );
};

const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        window.location.reload(true);
      }

      const error =
        (data && data.message) ||
        (data && data.email_address) ||
        response.statusText;

      return Promise.reject(error);
    }

    return data;
  });
};

export const employeeService = {
  getAllEmployees,
  addEmployee,
  updateEmployee,
  viewEmployee,
};
