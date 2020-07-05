import { authHeader, apiUrl } from "../helpers";

const getAllUsers = async () => {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return await fetch(`${apiUrl}/users`, requestOptions).then(handleResponse);
};

const handleResponse = (response) => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    if (!response.ok) {
      if (response.status === 401) {
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;

      return Promise.reject(error);
    }

    return data;
  });
};

export const userService = {
  getAllUsers,
};
