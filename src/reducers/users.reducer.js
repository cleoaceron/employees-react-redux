import { userConstants } from "../constants";

const initialState = {
  loading: false,
  error: false,
  message: "",
  search: false,
  users: [],
};

export function users(state = initialState, action) {
  switch (action.type) {
    case userConstants.GET_USERS_REQUEST:
      return {
        loading: true,
        error: false,
        search: false,
        message: "",
        users: [],
      };
    case userConstants.GET_USERS_SUCCESS:
      return {
        loading: false,
        error: false,
        search: false,
        message: "Successfully Fetched Team Users!",
        users: action.users,
      };
    case userConstants.GET_USERS_FAILURE:
      return {
        loading: false,
        error: action.error,
        search: false,
        message: "",
        users: [],
      };
    case userConstants.SEARCH_USERS:
      return {
        ...state,
        search: action.search !== "" ? true : false,
        users: state.users.map((user) =>
          user.name.toLowerCase().includes(action.search.toLowerCase()) ||
          user.email.toLowerCase().includes(action.search.toLowerCase())
            ? { ...user, hint: true }
            : { ...user, hint: false }
        ),
      };
    default:
      return state;
  }
}
