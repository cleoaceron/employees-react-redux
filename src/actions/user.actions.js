import { userConstants } from "../constants";
import { userService } from "../services";

const getAllUsers = () => {
  return (dispatch) => {
    dispatch(request());

    userService.getAllUsers().then(
      (users) => dispatch(success(users)),
      (error) => dispatch(failure(error))
    );
  };

  function request() {
    return { type: userConstants.GET_USERS_REQUEST };
  }
  function success(users) {
    return { type: userConstants.GET_USERS_SUCCESS, users };
  }
  function failure(error) {
    return { type: userConstants.GET_USERS_FAILURE, error };
  }
};

const search = (search) => {
  return { type: userConstants.SEARCH_USERS, search };
};

export const userActions = {
  getAllUsers,
  search,
};
