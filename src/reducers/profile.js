import { SET_NAME } from "../actions/constatnts";

const profileReducer = (state = { name: "" }, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export default profileReducer;
