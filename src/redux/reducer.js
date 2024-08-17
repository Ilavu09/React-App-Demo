import { SET_COLOR } from "./actions";

const initialState = {
  color: "white",
};

const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COLOR:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};

export default colorReducer;
