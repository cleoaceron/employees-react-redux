import { alertConstants } from "../constants";

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: "alert-success",
        message: action.message,
        success: true,
      };
    case alertConstants.ERROR:
      return {
        type: "alert-danger",
        message: action.message,
        success: false,
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state;
  }
}
