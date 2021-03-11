import {
  CHANGE_CAMERA,
  CHANGE_DATE,
  CHANGE_ROVER,
} from "../../common/constants";
import { Action, State } from "../../common/interfaces";

export const filterReducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_DATE:
      return {
        ...state,
        date: payload,
      };
    case CHANGE_ROVER:
      return {
        ...state,
        rover: payload,
      };
    case CHANGE_CAMERA:
      return {
        ...state,
        camera: payload,
      };
    default:
      return state;
  }
};
